import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../actions/authAction'

  function SignedUser(props) {
    const{logout,profile}=props

    return (
       <ul className="right">
    <li><NavLink to='/create'>New Project </NavLink></li>
    <li><a onClick={logout}>Log Out  </a></li>
    <li><NavLink to='/' className="btn btn-floating blue darken-4">{profile.initials} </NavLink></li>

       </ul>
    )
}
const mapDispatchToProps=(dispatch)=>
{
    return {
    logout:()=>{dispatch(signOut())}
    }
}
export default connect(null,mapDispatchToProps) (SignedUser)