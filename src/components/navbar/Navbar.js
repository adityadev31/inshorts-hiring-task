import './navbar.css';
import navbrand from '../../assets/nav-brand.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

  const [toggler, setToggler] = useState(false);

  const toggleHandler = () => setToggler(!toggler);

  const styles = {
    sidebarOpenStyle: {
      "right": "0px",
      "transition": "all 0.3s linear"
    },
  
    sidebarCloseStyle: {
      "right": "-250px",
      "transition": "all 0.3s linear"
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img className='navbar-brand-logo' src={navbrand} alt="corona shield" />
        <div className="navbar-brand-name">Corona Analyzer</div>
      </div>
      <div className="navbar-toggler" onClick={toggleHandler}><i className="fa-solid fa-bars-staggered"></i></div>
      <ul className="navbar-list" style={(!toggler) ? styles.sidebarCloseStyle : styles.sidebarOpenStyle}>
        <li className='navbar-toggler-close' onClick={toggleHandler}><i className="fa-solid fa-xmark"></i></li>
        <li className="navbar-item"><NavLink to="#">Home</NavLink></li>
        <li className="navbar-item"><NavLink to="#">Updates</NavLink></li>
        <li className="navbar-item"><NavLink to="#">Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar