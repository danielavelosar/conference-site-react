import React from 'react';

class BadgeForm extends React.Component{
    state = {

      };
    /* handleChange = (e) => {
        /* console.log({
            name: e.target.name,
            value: e.target.value,
        }); 
        this.setState({
            [e.target.name] : e.target.value
        })
    } */
    handleClick = (e) => {
        console.log(
            "button was Clicked"
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was Submitted");
        console.log(this.state);
    }
    render(){
    
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange = {this.props.onChange} 
                                type="text" 
                                className = "form-control" 
                                name ="firstName" id="" 
                                value = {this.props.formValues.firstName} />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange = {this.props.onChange} 
                                type="text" 
                                className = "form-control" 
                                name="lastName" id="" 
                                value = {this.props.formValues.lastName}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange = {this.props.onChange} 
                                type="email" 
                                className = "form-control" 
                                name="email" id="" 
                                value = {this.props.formValues.email}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Job Tittle</label>
                        <input onChange = {this.props.onChange} 
                                type="text" 
                                className = "form-control"
                                 name="jobTitle" id=""
                                 value = {this.props.formValues.jobTitle} />
                    </div>
                    
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange = {this.props.onChange} 
                                type="text" 
                                className = "form-control" 
                                name="twitter" id=""
                                value = {this.props.formValues.twitter} />
                    </div>
                    <button  onClick = {this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
            
        )
    }
}

export default BadgeForm