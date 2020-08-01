import React, { Component } from 'react'
import SignUpLink from './SignUpLink'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import {connect} from 'react-redux'
 class Navigation extends Component {
    render() {
      const {auth} = this.props
      const links= auth.uid? <SignInLink/> : <SignUpLink/>
        return (  /* Navigation*/
           
          
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div className="container">
    <Link to='/' className="navbar-brand js-scroll-trigger" >Nhatrogiare</Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
           {links}
    </div>
  </div>
</nav>


        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
  auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navigation)