const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const auth = require('../middleware/auth');
const config = require('../config');
const Picture = require('../models/Picture');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
    try {
        const pictures = await Picture.find().populate('user', 'username');
        if(pictures.length === 0) return res.status(404).send({error: 'На данный момент нет ни одной фотографии'});
        return res.send(pictures);
    } catch (e) {
        return res.status(500).send({error: 'Eternal Server Error'});
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const pictures = await Picture.find({user: req.params.id}).populate('user', 'username');
        if(pictures.length === 0) return res.status(404).send({error: 'Нет ни одной фотографии'});
        return res.send(pictures);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    try {
        const picture = new Picture({
            user: req.user._id,
            name: req.body.name,
        });
        if(req.file) picture.image = req.file.filename;
        await picture.save();
        return res.send(picture);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id);
        if(picture.user.toString() !== req.user._id.toString()) {
            return res.status(403).send({error: 'У вас нет прав на удаление этой фотограции'});
        }
        if(!picture) return res.status(404).send({error: 'Нет такой фотографии'});
        await Picture.deleteOne({_id: req.params.id});
        return res.send({message: `Фотография ${picture.name} удалена`});
    } catch (e) {
        return res.status(400).send({error: 'Bad Request'});
    }
});

module.exports = router;