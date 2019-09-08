import React, { Component } from 'react';
import {signUp} from '../../actions/authAction'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

 class SignUp extends Component {
     state={
    firstName:'',
    lastName:'',
      email:'',
      password:''
      
     }
     handlechange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
})
     }
     handleSubmit=(e)=>{
         e.preventDefault()
       this.props.signUp(this.state)
     }
    render() {
        const {auth,authError} =this.props
        if(auth.uid)
        {
            return <Redirect to= '/' />
        }
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        
                    <div className="input-field">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName"  onChange={this.handlechange} value={this.state.firstName} placeholder="FirstName"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName"  onChange={this.handlechange} value={this.state.lastName} placeholder="LastName"/>
                    </div>


                    <div className="input-field">
                        <label htmlFor="email"></label>
                        <input type="email" id="email"  onChange={this.handlechange} value={this.state.email} placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" onChange={this.handlechange} value={this.state.password} placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authError?<p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps=dispatch=>{
    return{
     signUp:(newUser)=>{dispatch(signUp(newUser))}   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
