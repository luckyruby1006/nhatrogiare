import React from 'react'
import {Link} from 'react-router-dom'
const ShowListLocationND = (props) => {
    const { project } = props

    return (
        <div className="row element_form--search--find">
              <div className="card" style={{width: '16rem', margin:'10px'}}>
              <Link to={'/showhome/'+project.id} > <img src={project.imgOne} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                   <h5 className="card-text"> {project.title}</h5>
                  <h6><i className="fas fa-money-bill-wave"></i> {project.price} VNĐ</h6>
                  <p><i className="fas fa-map-marked-alt"></i> {project.location}</p>
                  <Link to={'/showhome/'+project.id} className="btn btn-primary">Chi tiết</Link>
                </div>
              </div>
        </div>



    )
}
export default ShowListLocationND
