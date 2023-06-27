import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <div className="app">
      <div className="home-form">
        <div align="center">
          <h1>Bienvenido a nuestra aplicación</h1>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button-clicked"
            onClick={handleClick}>
            Acceder a la app
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
