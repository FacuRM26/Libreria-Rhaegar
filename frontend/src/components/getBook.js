// getBook.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GetBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.description}</p>
            
        <p>{book.pages} </p>
        <img src={book.coverImage} alt="Portada libro" />
        </div>
      ) : (
        <p>Cargando detalles del libro...</p>
      )}
    </div>
  );
};

export default GetBook;
