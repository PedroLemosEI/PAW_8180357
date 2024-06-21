const mongoose = require('mongoose');


const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        trim: true,
        lowercase: true
    },
    listing_title: {
        type: String,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        trim: true,
        lowercase: true,
        maxLength: 1000
    },
    price: {
        type: String,
        default: 0.0,
        validate(value) {
            if (value < 0.0) {
                throw new Error("Price can not be negative ");
            }
        }
    },
    type: {
        type: String,
        default: 'Single room',

    },

    created: {
        type: Date,
        default: Date.now
    },

    token: {
        type: String
    }
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;