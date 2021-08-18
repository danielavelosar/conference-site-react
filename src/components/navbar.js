import React from 'react'; 
import confLogo from '../images/badge-header.svg';
import {Link} from 'react-router-dom';
import './styles/Navbar.css'
class Navbar extends React.Component{
    render(){
        return (
            <div className = 'Navbar'>
                <div className = "container-fluid">
                    <Link to="/home" className = 'Navbar__brand'>
                        <img src={confLogo} alt="logo" className = 'Navbar__brand-logo'/>
                        <span className = "font-weight-light">Platzi</span>
                        <span className = "font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Navbar;