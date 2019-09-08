import React from 'react';
import{Link} from 'react-router-dom';

import SignedUser from './SignedUser';
import {connect} from 'react-redux';
import SignedOut from './SignedOut'

 function Navbar(props) {
     const {auth,profile} =props
     const links=auth.uid ?<SignedUser profile={profile}/>:<SignedOut/>
    return (
        <nav className="nav-wrapper green darken-1">
            <div className="container">
            <Link to="/" className="brand-logo left">Divyanshu</Link>
            {links}
            </div>
        </nav>
    )
}
const mapStateToProps=state=>{
    return {
 auth:state.firebase.auth,
 profile:state.firebase.profile
    }
}


export default  connect(mapStateToProps)(Navbar);