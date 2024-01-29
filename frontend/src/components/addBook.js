// addBook.js

import React , { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [newBook,setNewBook] = useState({
        title: '',
        author: '',
        pages: 0,
        description: '',
        genre: [],
        rating: 0,
        coverImage: null,
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Si es el campo de género, convierte el valor en un array
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: name === 'genres' ? value.split(',') : value,
        }));
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setNewBook((prevBook) => ({
            ...prevBook,
            coverImage2: file,
        }));
    };
    const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData);
      return response.data.imageUrl; // Supongamos que el servidor devuelve la URL de la imagen
    } catch (error) {
      console.error('Error al subir la imagen', error);
      // Manejar el error apropiadamente
      return null;
    }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Sube la imagen al servidor y obtén la URL de la imagen
        const imageFile = newBook.coverImage2;
        const imageUrl = await uploadImage(imageFile);
    
        console.log('URL de la imagen', imageUrl);
    
        // Enviar solo la URL al backend
        const bookData = {
            title: newBook.title,
            author: newBook.author,
            pages: newBook.pages,
            description: newBook.description,
            genre: newBook.genre,
            rating: newBook.rating,
            coverImage: imageUrl, // Enviar solo la URL de la imagen
        };
    
        axios.post('http://localhost:3000/api/books', bookData)
            .then((response) => {
                console.log('Libro agregado exitosamente', response.data);
                // Puedes redirigir a otra página o hacer otras acciones después de agregar el libro
            })
            .catch((error) => {
                console.error('Error al agregar el libro', error);
            });
    };

    return (
        <div>
            <h1>Agregar libro</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} />
                <br />
                <label htmlFor="author">Autor:</label>
                <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />
                <br />
                <label htmlFor="pages">Páginas:</label>
                <input type="number" name="pages" id="pages" value={newBook.pages} onChange={handleInputChange} />
                <br />
                <label htmlFor="description">Descripción:</label>
                <textarea name="description" id="description" value={newBook.description} onChange={handleInputChange} />
                <br />
                <label htmlFor="genre">Género:</label>
                <input type="text" name="genre" id="genre" value={newBook.genre} onChange={handleInputChange} />
                <br />
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" value={newBook.rating} onChange={handleInputChange} />
                <br />
                <label htmlFor="coverImage2">Portada:</label>
                <input type="file" name="coverImage2" id="coverImage2" onChange={handleFileChange} />
                <br />
                <button type="submit">Agregar libro</button>
                <br />
                <button type="reset">Limpiar formulario</button>
                <br />
                <button type="button" onClick={() => { window.location.href = '/'; }}>Regresar</button>
            </form>
        </div>
    );
};


export default AddBook;