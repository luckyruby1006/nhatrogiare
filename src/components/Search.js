import React,{useState} from 'react'
import {connect} from  'react-redux'
import ListNarBar from './Search/ListNarBar'
import ListHome from './Search/ListHome'
import InputSearch from './Search/InputSearch'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import ShowHome from './ShowHome'
import { ShowLocation } from './Search/ShowLocation'
const Search = (props) => {

 const {projects} =props
 const [searchInput, setSearchInput] = useState("")
 const [status, setStatus] = useState(false)
 const [bkx, setBkx] = useState("")
 //  console.log(searchInput)
const showListHome = (searchInput) =>{
  setSearchInput(searchInput)
}
// console.log(searchInput)
const showHome = () =>{
  if (status===false){
    if (searchInput===""){
      return projects && projects.map( project => <ListHome  project={project} key={project.id}/>)}
      else return searchInput && searchInput.map( project => <ListHome  project={project} key={project.id}/>)
  }

 //  console.log(searchInput)
  
  
}

const statusShow = () =>{
  if(status===false) {
return <InputSearch projects= {projects} showListHome={showListHome} /> }
else if(status===true){
  return <ShowLocation projects = {projects} changeStatus={changeStatus} bkx={bkx} />

}
}
const changeStatus = () => {
  setStatus(!status)
}
const changeStatusBKX = () =>{
  setStatus(true)
  const bkx= projects.filter( project =>project.daihocBachKinhXay===true)
 setBkx(bkx)
  console.log(bkx)
}
const changeStatusTL = () =>{
  setStatus(true)
  const bkx= projects.filter( project =>project.daihocThangLong===true)
 setBkx(bkx)
  console.log(bkx)
} 
const changeStatusCN = () =>{
  setStatus(true)
  const bkx= projects.filter( project =>project.daihocCongNghiep===true)
 setBkx(bkx)
  console.log(bkx)
} 
    return (
        <div className="container container_form--search">
        <div className="row">

           
          <ListNarBar changeStatus={changeStatus}  changeStatusBKX={changeStatusBKX} changeStatusTL={changeStatusTL} changeStatusCN={changeStatusCN}/>
          <div className="col-9 ">
              {statusShow()}
                   
  <div className="row element_form--search--find">
      {showHome()}
  </div>
        </div>
      </div>
      </div>
      
    )
}

const mapStateToProps = (state, ownProps) => {

  return {
    projects:state.firestore.ordered.projects
  }
}


export default compose(
  firestoreConnect([
    {collection:"projects" , orderBy: ['dateCreate','desc']}
  ]),
  connect(mapStateToProps)
  )(Search)
