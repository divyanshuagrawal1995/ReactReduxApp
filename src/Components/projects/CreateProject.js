import React, { Component } from 'react'
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom'
import {createProject} from '../../actions/projectAction'
 class CreateProject extends Component {
     state={
        title:'',
      content:''
     }


     handlechange=(e)=>{
          this.setState({
    [e.target.id]:e.target.value
})
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         this.props.createProject(this.state)
         this.props.history.push('/')

     }
    render() {
        const {auth} =this.props
       if(!auth.uid)
       {
        return <Redirect to='/login' />
       }

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title"></label>
                        <input type="text" id="title"  onChange={this.handlechange} value={this.state.title} placeholder="Title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"></label>
                        <input type="text" id="content" onChange={this.handlechange} value={this.state.content} placeholder="Content" />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        createProject:(project)=>{dispatch(createProject(project))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateProject)
