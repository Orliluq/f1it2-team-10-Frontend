import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';

function useIsActive(pathname) {
  const location = useLocation();
  return location.pathname === pathname ? 'active' : '';
}

function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    navigate('/crearCita');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const handleAnimate = () => {
    dispatch({ type: 'SET_ANIMATION_ACTIVE' });
  };
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavExpanded) {
        const navigationItems = document.querySelector('.navigation__items');
        if (navigationItems && !navigationItems.contains(event.target)) {
          setIsNavExpanded(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavExpanded]);


  return (
    <>
      <nav>
        <Link to="/menu" />
        <div align="center">
          <div className="background-menu">
            <div className="hamburger" onClick={handleHamburgerClick}>
              <p>MENU</p>
            </div>
          </div>
          <div
            align="center"
            className={`navigation__items ${isNavExpanded ? 'visible' : ''}`}
          >
            <Link to="/crearCita">
              <button onClick={handleAddClick} className={useIsActive('/crearCita')}>
                CREAR CITA
              </button>
            </Link>
            <Link to="/detalle">
              <button onClick={handleAnimate} className={useIsActive('/detalle')}>DETALLE CITA</button>
            </Link>
            <Link to="/buscarCitas">
              <button onClick={handleAnimate} className={useIsActive('/buscarCitas')}>BUSCAR CITAS</button>
            </Link>
            <Link to="/about">
              <button onClick={handleAnimate} className={useIsActive('/about')}>ABOUT</button>
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
