const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Introduzir username.'],
        unique: [true, "Oops! Username já existe!"],
        trim: true,
        lowercase: true,
    },
    firstname: {
        type: String,
        required: [true, 'Introduza o seu primeiro nome.'],
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: [true, 'Introduza o seu último nome.'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password inválida. Pelo menos 6 caracteres.'],
        minlength: 6,
        lowercase: true,
        uppercase: true,
        number: true
    },
    email: {
        type: String,
        required: [true, 'Introduza o seu email.'],
        unique: [true, "Email está a ser utilizado!"],
        trim: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    phonenumber: {
        type: Number,
        required: [true, 'Introduza o seu número'],
        minlength:9
    },
    address: {
        type: String,
        required: [true, 'Introduza a sua morada'],
        minlength:4
    },
    type: {
        type: String,
    },

    token: {
        type: String
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;