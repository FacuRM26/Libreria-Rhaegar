// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: '../frontend/public/images/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
    }
});



const upload = multer({ storage: storage });
// Utiliza body-parser para analizar las solicitudes JSON
app.use(bodyParser.json());
app.use(cors());
// Importar el controlador
const bookController = require('./controllers/bookController');
const connectDB = require('./database');

// Rutas de los libros
app.get('/api/books', bookController.getBooks);
app.post('/api/books', bookController.addBook);
app.put('/api/books/:id', bookController.updateBook);
app.delete('/api/books/:id', bookController.deleteBook);

// Ruta para subir imágenes
app.post('/api/upload', upload.single('image'), (req, res) => {
    const imageUrl = `/images/${req.file.filename}`;
    res.json({ imageUrl });
});
// Conectar a la base de datos
connectDB();
app.listen(port, () => console.log(`App listening on port ${port}!`));


