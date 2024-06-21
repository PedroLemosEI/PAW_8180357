const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: [true, 'Introduzir id da listagem'],
    },
    booking_id: {
        type: String,
        required: [true, 'Introduzir id da reserva'],
    },
    username: {
        type: String,
        required: [true, 'Introduza o username'],
    },
    booking_date: {
        type: Date,
        required: [true, 'Introduzir data da reserva'],
        min: '1999-01-01',
        max: '2030-12-30'
    },
    booking_start: {
        type: Date,
        required: [true, 'Introduzir data de inicio'],
        min: '1999-01-01',
        max: '2030-12-30'
    },
    booking_end: {
        type: Date,
        required: [true, 'Introduzir data de fim'],
        min: '1999-01-01',
        max: '2030-12-30'
    },
    petname: {
        type: String,
        required: [true, 'Introduza o nome do nosso hóspede']
    },
    category: {
        type: String,
        required: [true, 'Introduza o tipo de animal']
    },
    race: {
        type: String,
        required: [false, 'Introduza a raça']
    },
    photo: {
        type: String,
        required: [false, 'Introduza a URL da imagem']
    },
    chip_code: {
        type: Number,
        required: [true, 'Introduza o código do chip']
    },
    vaccines: {
        type: String,
        required: [true, 'Introduza a URL da imagem']
    },
    special_needs: {
        type: String,
        required: [true, 'Introduza alguma especificação ou necessidade adicional do seu companheiro']
    },
    price: {
        type: Number,
        required: [true, 'introduzir o preço por dia']
    },
    status: {
        type: String,
        required: [true, 'Introduzir estado da reserva']
    }
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;