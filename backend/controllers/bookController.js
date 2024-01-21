// controllers/bookController.js

const Book = require('../models/book');
const mongoose = require('mongoose');

const getBooks = async (req, res) => {
    try {
        // Verifica si el parámetro 'title' está presente en la consulta
        if (req.query.title) {
            const books = await Book.find({ title: req.query.title });
            res.json(books);
        } else {
            const allBooks = await Book.find();
            res.json(allBooks);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        genres: req.body.genres,
        description: req.body.description,
        rating: req.body.rating,
        reviews: req.body.reviews,
        coverImage: req.body.coverImage
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (req.body.title) {
            book.title = req.body.title;
        }
        if (req.body.author) {
            book.author = req.body.author;
        }
        if (req.body.pages) {
            book.pages = req.body.pages;
        }
        if (req.body.genres) {
            book.genres = req.body.genres;
        }
        if (req.body.description) {
            book.description = req.body.description;
        }
        if (req.body.rating) {
            book.rating = req.body.rating;
        }
        if (req.body.reviews) {
            book.reviews = req.body.reviews;
        }
        if(req.body.coverImage) {  
            book.coverImage = req.body.coverImage;
        }
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// En tu controlador
const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;

        // Verifica si el ID es válido antes de intentar eliminar
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ message: 'Invalid book ID.' });
        }

        // Intenta eliminar el libro por su ID
        const deletedBook = await Book.findByIdAndDelete(bookId);

        // Verifica si el libro fue encontrado y eliminado
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        }

        res.json({ message: 'Book deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
};


        