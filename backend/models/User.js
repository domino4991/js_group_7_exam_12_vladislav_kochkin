const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Поле "Логин" обязательно для заполнения'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Поле "Пароль" обязательно для заполнения']
    },
    token: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    facebookId: {
        type: String,
        default: null
    }
}, {
    versionKey: false
});

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (e) {
        return next(e);
    }
});

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

UserSchema.methods.checkPass = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.genToken = function () {
    this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;