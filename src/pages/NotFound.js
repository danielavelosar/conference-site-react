import React from 'react'
import './styles/NotFound.css'
import errorImage from "../images/404.svg"

class NotFound extends React.Component{
    render(){
        return (
            <div className="main__error">
                <img className="img__error" src={errorImage} alt=""  />
            </div>
        )
    }
}

export default NotFound;