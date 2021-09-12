import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import './styles/BadgeList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(props){
  const [query, setQuery] = React.useState("")

  const [filteredBadges, setFilteredBadges] = React.useState(props.badges)

  React.useMemo( () => {
  const result = props.badges.filter(badge=>{
    return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
  });
  setFilteredBadges(result)
  }, [props.badges, query]);

  return({query, setQuery, filteredBadges})
}

function BadgesList(props){
    const {query, setQuery, filteredBadges} = useSearchBadges(props);

    if (filteredBadges.length === 0) {
      return (
        
        <div>
          <div className="form-group">
            <label>Filter badges</label>
            <input type="text" className="form-control"
              value={query}
              onChange={(e)=>{
                setQuery(e.target.value)
              }}
              />
          </div>
      
          <h3>There is no Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
            />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.slice(0).reverse().map(badge => {
            return (
              <li key={badge.id}>
                <Link className = "text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
                <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}>
                  Edit badge
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  
}

export default BadgesList;


