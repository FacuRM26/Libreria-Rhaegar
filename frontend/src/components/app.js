import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Datos del Backend:</h1>
      
      <img src='/images/image1.jpeg' alt="Portada libro" />

      {data ? (
        <ul>
          {data.map(item => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}

    </div>
  );
};

export default App;
