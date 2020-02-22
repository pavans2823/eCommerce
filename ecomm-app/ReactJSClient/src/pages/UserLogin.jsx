import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UserLogin extends Component {
    constructor(props) {
        super();
        this.state = { name: '', password: '' };
        }
    
        handleInputChange = (event) => 
                this.setState({[event.target.name]: event.target.value})
      submitLogin = (event) => {
        event.preventDefault();
      
      }

    
    render() {
        return (
         <div className="container">
         <hr/>
           <div className="col-sm-8 col-sm-offset-2">
             <div className="panel panel-primary">
               <div className="panel-heading"><h3>Log in </h3></div>
               <div className="panel-body">
                 <form onSubmit={this.submitLogin}>
                   <div className="form-group">
                     <label>Name:</label>
                     <input type="text" className="form-control" 
                         name="name" onChange={this.handleInputChange}/>
                   </div>
                   <div className="form-group">
                     <label>Password:</label>
                     <input type="password" className="form-control" 
                         name="password" onChange={this.handleInputChange}/>
                   </div>
                   <button type="submit" className="btn btn-success">Submit</button>
                 </form>
               </div>
             </div>
           </div>
         </div>
       );
     }
   
}

export default UserLogin