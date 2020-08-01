import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePost} from '../../store/actions/projectActions'


class EditPostList extends Component {
  
    deletePost = () =>{
            this.props.deletePost(this.props.id)
    }
    render() {  console.log(this.props.id)
        return (
            <div className="card card--margin" style={{width: '18rem'}}>
            <img src={this.props.project.imgOne} className="card-img-top card-img-style" alt="..." />
            <div className="card-body">
            <h5 className="card-text"> {this.props.project.title}</h5>
                  <h6><i className="fas fa-money-bill-wave"></i> {this.props.project.price} VNĐ</h6>
                  <p><i className="fas fa-map-marked-alt"></i> {this.props.project.location}</p>
                  <p><i className="fas fa-person-booth"></i>  Còn trống {this.props.project.room} Phòng</p>
              <Link to={'/fixpost/'+this.props.id} className="btn btn-danger">Edit Post</Link>
              <a href="#" className="btn btn-warning" onClick={this.deletePost} >Delete</a>
      
            </div>
          </div>
      
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(EditPostList)
