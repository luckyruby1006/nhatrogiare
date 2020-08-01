import React from 'react'
import {Link} from 'react-router-dom'
const SignUpLink = () => {
    return (
     
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item"><Link to='/search' className="nav-link js-scroll-trigger"><i className="fas fa-home"></i> Home</Link></li>
        <li className="nav-item"><Link to='/post'className="nav-link js-scroll-trigger" ><i className="far fa-sticky-note"></i> Post</Link></li>
        <li className="nav-item"><Link to='/signup' className="nav-link js-scroll-trigger" ><i className="fas fa-user-plus"></i> SignUp</Link></li>
        <li className="nav-item"><Link to='/signin' className="nav-link js-scroll-trigger" ><i className="fas fa-sign-in-alt"></i> SignIn</Link></li>
      </ul>
      
    )
}

export default SignUpLink
