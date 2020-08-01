import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import { Redirect, Link } from 'react-router-dom'

class SignIn extends Component {
        state ={
          email:"",
          password:"",
        }      

  handleChange =(e) => {
    this.setState({
        [e.target.id]:e.target.value
    })

}
handleSubmit  = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
}



  render() {
    const {authError} = this.props;
    const {auth} = this.props;
      if(auth.uid) return <Redirect to='/search' />
    return (
      <div>
        <div className="container">
        <div className="row signin__form">
          <div className="col-3">
          </div>
          <div className="col-6 ">
            <form className="signin__form--input">
              <div className="form-group">
                <label htmlFor="email">Email @</label>
                <input onChange={this.handleChange} type="email" className="form-control"  id='email' aria-describedby="helpId" placeholder="eg:luckyman1006@gmail.com" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} type="password" className="form-control" placeholder="better 6 characters" id='password' aria-describedby="helpId"  />
              </div>
              <button onClick={this.handleSubmit} type="submit" className="btn btn-danger">SIGN IN</button>
              <h5 className="signin__form--text">If you haven't account SIGN UP</h5>
                {authError?<div className="bg-danger" >{authError}</div>:null} 
              <Link to='/signup' type="submit" className="btn btn-warning signin__form--input--btn">SIGN UP</Link>
            </form>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      signIn: (creds) => {
          dispatch(signIn(creds))
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
