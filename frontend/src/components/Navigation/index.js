import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import Logo from '../../assests/icon.svg'
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';


import SearchBar from './Search'

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <li className="navbar__nav-links">

        <ul className="auth-btns">
          <li className="navbar__nav-links--navlink">
            <LoginFormModal />
          </li>
          <li className="navbar__nav-links--navlink">
            <SignupFormModal />
          </li>
        </ul>
      </li>
    );
  }

  return (
    <nav className="navbar">
      <ul className="navbar__nav-links">
        <li className="navbar__nav-links--navlink">
          <NavLink to="/" exact>Home</NavLink>
        </li>
        {/* <Logo /> */}
        <ReactSVG src="{Logo}" />
        <img src={Logo} width={25} />
        
        <SearchBar />
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>        
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  )
};

export default Navigation;
