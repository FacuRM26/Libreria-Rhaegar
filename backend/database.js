// database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Rhaegar', {
        });
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
    }
};

module.exports = connectDB;
