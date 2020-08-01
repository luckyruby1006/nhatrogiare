import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
const ListHome = ({project}) => {
  // console.log(project)
    return (
              <div className="card " style={{width: '16rem', margin:"11px"}}>
              <Link to={'/showhome/'+project.id} > <img src={project.imgOne} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                   <h5 className="card-text"> {project.title}</h5>
                  <h6><i className="fas fa-money-bill-wave"></i> {project.price} VNĐ</h6>
                  <p><i className="fas fa-map-marked-alt"></i> {project.location}</p>
                  <p><i className="fas fa-person-booth"></i>  Còn trống {project.room} Phòng</p>
                  <p><i className="fas fa-calendar-day"></i>  {moment(project.dateCreate).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  <Link to={'/showhome/'+project.id} className="btn btn-primary">Chi tiết</Link>
                </div>
              </div>
   
   
    )
}

export default ListHome
