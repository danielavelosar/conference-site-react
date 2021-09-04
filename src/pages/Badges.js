import React from 'react'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/Badges_list'
import './styles/Badges.css'
import {Link} from 'react-router-dom'

class Badges extends React.Component{
    
    constructor(props){
        super(props);
        console.log('1. constructor')
        this.state= {
            data: undefined,
            nextPage: 1,
            loading: true,
            error: null,
    
        };
    }

    componentDidMount(){
        console.log('3. component did mount');
        this.fetchData();
    }
/* 
    componentDidUpdate(prevProps, prevState){
        console.log('5. component didupdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        });
        console.log({
            props: this.props,
            state: this.state,
        });
    } */
    fetchData = async() => { 
        this.setState({loading:true, error: null});
    
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page={this.nextPage}`)
            const data = await response.json()
            this.setState({
                data: data,
                nextPage: this.nextPage + 1,
                loading: false,
            })
            
        }catch(error){
        this.setState({loading: false, error:error})
        }
    }

/*     componentWillUnmount(){
        console.log('6. component will unmount')
        clearTimeout(this.timeoutId);
    } */
    render(){
        if (this.state.loading == true){
            return ('loading...')
        }
        console.log('2/4. render ')
        return <React.Fragment>
            
            
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="conf logo" />
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge 
                    </Link>
                </div>
            </div>


            <div className="Badges__list">
                <div className="Badges__container">
                    <BadgesList badges={this.state.data}/>
                    
                </div>
            </div>
        </React.Fragment>
    }
}


export default Badges 