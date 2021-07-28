import React from 'react';
import confLogo from '../images/badge-header.svg'
import '../styles/Badge.css'
import 'bootstrap/dist/css/bootstrap.css'
class Badge extends React.Component {
    render(){
        return<main className="Badge">
            <div className="Badge__header">
                <img src= {confLogo} alt= '' />
            </div>
            <div className="Badge__section-name">
                <img 
                className="Badge__avatar"
                src="http:\/\/2.gravatar.com\/avatar\/4d60427f69a2b2c10945b0f64cc687e7" 
                alt="Avatar" />
                <h1>
                    Paula <br/>
                    Velosa
                </h1>
            </div>
            <div className="Badge__section-info">
                <h4>frontend and data science</h4>
                <div><a href=""> @h4velosa</a></div>
            </div>

            <div className='Badge__footer'> conf</div>

        </main>
    }
}

export default Badge; 