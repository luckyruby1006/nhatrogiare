import React, { Component } from 'react'
import {signUp} from '../store/actions/authActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
 class SignUp extends Component {
  state ={
    email:"",
    password:"",
    first:"",
    last:"",
    phone:"",

  }

  isChange = (e) =>{
  this.setState({
    [e.target.id]:e.target.value
  })
}
submit = (e) => {
  e.preventDefault()
  this.props.signUp(this.state)
}

  render() {
    const {auth,authError} =this.props
    if (auth.uid) return <Redirect to='/'/>

    return (
      <div className="container">
      <div className="row signin__form">
        <div className="col-3">
        </div>
        <div className="col-6 ">
          <form className="signin__form--input">
            <div className="form-group">
              <label className="signin__form--input--label" htmlFor="email">Email @</label>
              <input onChange={this.isChange} type="email" className="form-control" id="email"   aria-describedby="help" placeholder="eg: luckyman1006@gmail.com" />
            </div>
            <div className="form-group">
              <label className="signin__form--input--label" htmlFor="password">Password</label>
              <input onChange={this.isChange} type="password" className="form-control" id="password"   aria-describedby="help" placeholder />
            </div>
            <div className="form-group">
              <label className="signin__form--input--label" htmlFor="first">First Name </label>
              <input onChange={this.isChange} type="text" className="form-control" id="first"  aria-describedby="help" placeholder="eg: Nguyễn Hoàng" />
            </div>
            <div class="form-group">
              <label className="signin__form--input--label" htmlFor="last">Last Name</label>
              <input onChange={this.isChange} type="text" className="form-control" id="last"  aria-describedby="help" placeholder="eg: Nam" />
            </div>
            <div className="form-group">
              <label className="signin__form--input--label" htmlFor="phone">Phone Number</label>
              <input onChange={this.isChange} type="text" className="form-control" id="phone"  aria-describedby="help" placeholder="eg: 0997382112" />
            </div>
            <div className="bg-danger"> {authError ? <p>{authError}</p>:null} </div>
            <button onClick={this.submit} className="btn btn-danger">SIGN UP</button>
          </form>
        </div>
        <div className="col-3">
        </div>
      </div>
    </div>
    
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)