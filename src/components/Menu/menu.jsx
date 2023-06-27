import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';

function useIsActive(pathname) {
  const location = useLocation();
  return location.pathname === pathname ? 'active' : '';
}

function Menu() {
  const [access, setAccess] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    navigate('/crearCita');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const handleAnimate = () => {
    setAnimationActive((prev) => !prev);
    dispatch({ type: 'SET_ANIMATION_ACTIVE', 
      payload: !animationActive });
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleHamburgerClick = () => {
    setIsNavExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleClick = () => {
      const navigationItems = document.querySelector('.navigation__items');
      if (navigationItems) {
        navigationItems.classList.toggle('visible');
      }
    };

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', handleClick);
      return () => {
        hamburger.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <>
      <nav>
        <Link to="/menu" />
        <div align="center">
        <div className="background">
          <div className="hamburger" onClick={handleHamburgerClick}>
            <p>MENU</p>
          </div>
        </div>
          <div align="center" className={`navigation__items ${isNavExpanded ? 'visible' : ''}`}>
            <Link to="/crearCita">
              <button onClick={handleAddClick} className={useIsActive('/crearCita')}>
                CREAR CITA
              </button>
            </Link>
            <Link to="/detalle">
              <button className={useIsActive('/detalle')}>DETALLE CITA</button>
            </Link>
            <Link to="/buscarCitas">
              <button className={useIsActive('/buscarCitas')}>BUSCAR CITAS</button>
            </Link>
            <Link to="/about">
              <button className={useIsActive('/about')}>ABOUT</button>
            </Link>
            <div>
              <button onClick={handleExitClick} className={useIsActive('/exit')}>
                EXIT
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
