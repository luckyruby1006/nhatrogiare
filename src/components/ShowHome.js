import React, { useState } from 'react'
import map from '../images/maps/map.png'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const ShowHome = (props) => {
  const [status, setStatus] = useState(false)
const {project} = props;
const {profile} = props;
const {authUid} = props;

const showHomeOne =()=>{if (project) return project.imgOne }
const showHomeTwo =()=>{if (project) return project.imgTwo }
const showHomeThree =()=>{if (project) return project.imgThree }
const showTitle =()=>{if (project) return project.title}
const price =()=>{if (project) return project.price}
const acreage =()=>{if (project) return project.acreage}
const content =()=>{if (project) return project.content}
const location =()=>{if (project) return project.location}
const showName= ()=>{
if(!authUid){return ` Tên chủ phòng ${profile.first} ${profile.last}` }
      else return "Tên chủ phòng Đặng Thanh mai"
    
}
const showPhone = ()=>{
  if(status===true){
if(!authUid){ return `Số điện thoại ${profile.phone}`}
else {return "Số điện thoại 0968512476"}
}else return "Số điện thoại"
}

const changePhone= () =>{
  setStatus(true)
  showPhone()
}
  // console.log(project)
// console.log(showhome())
    return (
  
        <div className="container container__showhome">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={showHomeOne()} className="d-block w-100" alt="ảnh 1" />
                </div>
                <div className="carousel-item">
                  <img src={showHomeTwo()} className="d-block w-100" alt="ảnh2" />
                </div>
                <div className="carousel-item">
                  <img src={showHomeThree()} className="d-block w-100" alt="ảnh3" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <h5> {showTitle()}</h5>
            <p><i className="fas fa-money-bill"></i> {price()} VNĐ </p>
            <p><i className="fas fa-ruler-combined"></i> {acreage()} m&sup2;</p>
            
            <p> <i className="fas fa-sticky-note"></i> {content()}  </p>
            <p><i className="fas fa-map-marked-alt"></i> {location()}</p>
    <p><i className="fas fa-user"></i> {showName()}</p>
          
    <p><i className="fas fa-phone"></i> {showPhone()}</p>
            <div onClick={changePhone} className="btn btn-danger">Ấn để hiện số</div>
          </div>

        </div>
      </div>
      
    )
}


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const id = ownProps.match.params.id;
//  console.log(id)
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  // console.log(project)

  return {
    project: project,
    profile: state.firebase.profile,
    authUid: state.firebase.auth

  }
}
export default compose(
  firestoreConnect([{
    collection: 'projects'
  }]),
  connect(mapStateToProps)) (ShowHome)
