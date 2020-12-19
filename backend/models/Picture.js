const mongoose = require('mongoose');

const PictureSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, 'Поле "Название" обязательно для заполнения']
    },
    image: {
        type: String,
        required: [true, 'Поле "Изображение" обязательно для заполнения']
    }
}, {
    versionKey: false
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;