import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SvgLogo from '../../assests/IconSvg'
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
          <SvgLogo /> 
        </li>

        
        <SearchBar />

        <a href="/">PortFolio</a>
        <a href="/">Cash</a>

        <a href="/">Account</a>        
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  )
};

export default Navigation;
