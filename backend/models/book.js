//models/book.js
// Configurar la conexión a la base de datos
const connectDB = require('../database');

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    description: String,
    rating: Number,
    reviews: [String],
    coverImage: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
