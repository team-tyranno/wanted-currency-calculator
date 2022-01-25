import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { NavBar, MenuItem, Main } from './style';

export function Layout({ children }) {
  const navigate = useNavigate();
  // const [activeMenu, setActiveMenu] = useState(0); //idx

  return (
    <>
      <NavBar>
        <MenuItem onClick={() => navigate('/')}>Calculator1</MenuItem>
        <MenuItem onClick={() => navigate('/2')}>Calculator2</MenuItem>
      </NavBar>
      <Main>{children}</Main>
    </>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
