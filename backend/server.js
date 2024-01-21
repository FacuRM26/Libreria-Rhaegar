// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Utiliza body-parser para analizar las solicitudes JSON
app.use(bodyParser.json());

// Importar el controlador
const bookController = require('./controllers/bookController');
const connectDB = require('./database');
// Rutas de los libros
app.get('/api/books', bookController.getBooks);
app.post('/api/books', bookController.addBook);
app.put('/api/books/:id', bookController.updateBook);
app.delete('/api/books/:id', bookController.deleteBook);

// Conectar a la base de datos
connectDB();
app.listen(port, () => console.log(`App listening on port ${port}!`));


