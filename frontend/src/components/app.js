// app.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Libros:</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item._id}>
              <img src={item.coverImage} alt="Portada libro" />
              <br></br>
              {item.title} - {item.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
      <Link to="/add-book">
        <button>Agregar libro</button>
      </Link>
    </div>
  );
};

export default App;
