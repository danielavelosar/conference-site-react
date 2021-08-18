import React from 'react'
import {Link} from 'react-router-dom'
import astronauts from '../images/astronauts.svg';
import platziConfLogo from '../images/platziconf-logo.svg'
import './styles/Home.css'

class Home extends React.Component{

    render(){
        return(
            <div className="Home">
                <div className="Home__section-left"> 
                <img src={platziConfLogo} alt="" />
                <h2>PRINT YOUR BADGES</h2>
                <p>the easiest way to manage your conference</p>
                <div className="home__buttons">
                    <Link to="/badges" className="btn btn-primary">
                        Start Now
                    </Link>
                </div>
                </div>
                <div className="Home__section-right"><img src={astronauts} alt="" />
                </div>
            </div>
        )
    }
}

export default Home