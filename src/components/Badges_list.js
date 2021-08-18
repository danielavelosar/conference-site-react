import React from 'react'
import './styles/BadgeList.css'


class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled">
                        {this.props.badges.map((badge) => {
                                return(
                                    <li key={badge.id} className= "BadgeList">
                                        <div className="Badge">
                                            <div >
                                                <img className="Badge__avatar"
                                                    src={badge.avatarUrl} 
                                                    alt="" />
                                            </div>
                                            <div className = "Badge__section">
                                                <strong>{badge.firstName} {badge.lastName}</strong>
                                                <div className = "Badge__section-twitter">
                                                    <img className = "Badge__icon" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"  alt="" />
                                                    <a href= "https://twitter.com/${badge.twitter}">@{badge.twitter}</a>
                                                </div>
                                                <p>{badge.jobTitle}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
            </ul>
                        
        );
    }
}


export default BadgesList