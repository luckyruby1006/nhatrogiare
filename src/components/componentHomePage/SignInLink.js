import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'
import { connect } from 'react-redux'

const SignInLink = (props) => {
    return (
    
             <ul className="navbar-nav text-uppercase ml-auto">
         <li className="nav-item"><Link to='/search' className="nav-link js-scroll-trigger"><i className="fas fa-home"></i> Home</Link></li>
        <li className="nav-item"><Link to='/post'className="nav-link js-scroll-trigger" ><i className="far fa-sticky-note"></i> Post</Link></li>
        <li className="nav-item"><Link to='/editpost'className="nav-link js-scroll-trigger" ><i className="fas fa-edit"></i> Edit Post</Link></li>
         <li className="nav-item"><a onClick={props.signOut} className="nav-link js-scroll-trigger" >LogOut</a></li>
      </ul>
         
      
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      signOut: () => {
          dispatch(signOut())
      }
  }
}
export default connect(null,mapDispatchToProps) (SignInLink)
