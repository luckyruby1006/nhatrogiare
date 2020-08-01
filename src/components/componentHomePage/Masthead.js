import React from 'react'
import {Link} from 'react-router-dom'
function Masthead() {
    return (
<header className="masthead">
  <div className="container">
    <div className="masthead-subheading">Welcome To Nha Tro Sinh Vien</div>
    <div className="masthead-heading text-uppercase">Find your home Now</div>
    <Link to='/search' className="btn btn-primary btn-xl text-uppercase js-scroll-trigger masthead_btn--find" href="#services">
      <div className="masthead_btn">
      <i className="fas fa-search fa-3x"></i><span>FIND NOW</span>
      </div>
      </Link>
  </div>
</header>

    )
}

export default Masthead
