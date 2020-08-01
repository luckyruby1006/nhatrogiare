import React ,{useState}from 'react'
import EditPostList from './EditPost/EditPostList'
import {compose} from 'redux'
import {connect} from  'react-redux'
import { firestoreConnect } from 'react-redux-firebase';


function EditPost(props) {
        const {projects} = props
        console.log(projects)
  const  showList = ()=>{if(projects)

     return projects.map(project=><EditPostList project={project} key= {project.id} id= {project.id}/> )
  } 

        return (
            <div className="container">
            <div className="row text-center">
      {showList()}
            </div>
</div>
         
        )
    
}

const mapStateToProps = (state, ownProps) => {

        const auth = state.firebase.auth.uid
        const projects = state.firestore.ordered.projects
        if(projects){
            var project = projects.filter((project) => project.uid===auth )
        }

    return {
      projects:project,


    }
  }
  
  
  export default compose(
    firestoreConnect([
      {collection:"projects" , orderBy: ['dateCreate','desc']}
    ]),
    connect(mapStateToProps)
    )(EditPost)
  