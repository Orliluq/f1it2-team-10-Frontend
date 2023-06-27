import React from 'react';
import { useNavigate } from 'react-router-dom';
import orli from '../../assets/orli.png';
import yeferson from '../../assets/yeferson.png';
import giovanni from '../../assets/giovanni.png';
import style from './about.module.css';

const About = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
      <div className={style.background}>
        <div className={style.title}>
          <h1>CITASYNC</h1>
        </div>
        <div className={style.subtitle}>
          <h2>Tu Agenda de Citas</h2>
        </div>
        <div>
          <h4>Bienvenidos al proyecto del Team-10</h4>
          <h4>Somos TECHNOMANCERS, un gusto que puedan ver nuestro proyecto con Try Catch.Tv y Dev Latam</h4>
          <h4>El team está conformado por:</h4>
        </div>
        <ul className={style.team}>
          <div>
            <img
              src={orli}
              alt=""
              width="100px"
              style={{ borderRadius: '80%', marginTop: '10px', marginBottom: '-10px' }}/>
            <h4>Orli Dun</h4>
            <h5>FullStack Web Developer</h5>
            <h6>Team Lead</h6>
          </div>
          <div>
            <img
              src={yeferson}
              alt=""
              width="100px"
              style={{ borderRadius: '80%', marginTop: '10px', marginBottom: '-10px' }}/>
            <h4>Yeferson Agudelo</h4>
            <h5>Programador de Software</h5>
            <h6>Backend</h6>
          </div>
          <div>
            <img
              src={giovanni}
              alt=""
              width="100px"
              style={{ borderRadius: '80%', marginTop: '10px', marginBottom: '-10px' }}/>
            <h4>Giovanni Rodriguez</h4>
            <h5>Ingeniero en Multimedia y Desarrollo</h5>
            <h6>Backend</h6>
          </div>
        </ul>
        <div className={style.button}>
          <button onClick={() => navigate('/menu')} className="ov-btn-grow-ellipse">Back to Menu</button>
          <button onClick={goHome} className="ov-btn-grow-ellipse">Go to home page</button>
      </div>
    </div>
  );
};

export default About;

