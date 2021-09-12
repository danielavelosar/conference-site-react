import React from 'react';
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
import 'bootstrap/dist/css/bootstrap.css'
import Gravatar from '../components/Gravatar';
class Badge extends React.Component {
    render(){

        return<main className="Badge">
            <div className="Badge__header">
                <img src= {confLogo} alt= '' />
            </div>
            <div className="Badge__section-name">
            <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
            />
    
            <h1>
                {this.props.firstName} <br/>
                {this.props.lastName}
            </h1>
            </div>
            <div className="Badge__section-info">
                <h4>{this.props.jobTitle}</h4>
                <div><a href=""> @{this.props.twitter}</a></div>
            </div>

            <div className='Badge__footer'> conf</div>

        </main>
    }
}

export default Badge; 