import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {signIn} from '../../actions/authAction'

 class SignIn extends Component {
     state={
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
this.props.signIn(this.state)
     }
    render() {
        const {auth,authentication}=this.props

        if(authentication.uid)
        {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email"></label>
                        <input type="email" id="email"  onChange={this.handlechange} value={this.state.email} placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" onChange={this.handlechange} value={this.state.password} placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {auth ?<p> {auth}</p>:null}
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        auth:state.auth.authError,
        authentication:state.firebase.auth

    }
}
const mapDispatchToProps=dispatch=>{
    return{
        signIn:(creds)=>{dispatch(signIn(creds))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SignIn)
