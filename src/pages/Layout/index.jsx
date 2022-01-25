import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { NavBar } from './style';

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar>
        <button type="button" onClick={() => navigate('/')}>
          Calculator1
        </button>
        <button type="button" onClick={() => navigate('/2')}>
          Calculator2
        </button>
      </NavBar>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
