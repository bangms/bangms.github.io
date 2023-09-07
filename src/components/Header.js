import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import './header.scss';

const Header = ({ location }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const history = useNavigate();

  useEffect(() => {
    console.log('location', location);
  }, []);
  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    setState({ clicked: false, menuName: 'Menu' });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'X',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'X',
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Bang</Link>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <input className="menu-icon__cheeckbox" type="checkbox" onClick={handleMenu} />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </div>
  );
};

export default Header;
