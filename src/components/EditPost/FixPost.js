import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { Link, Redirect } from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase'
import {update} from '../../store/actions/projectActions'
class FixPost extends Component {
    state = {
        title: '',
        district: '',
        ward: '',
        acreage: '',
        price: 0,
        room:'',
        content: 
        `- Gần Đại Học
- Gần trung tâm thương mại
- Gần chợ
- Gần bến xe bus
- An ninh tốt 
- Vệ sinh khép kín 
- Số lượng người ở nhiều nhất là : `,
        house: '',
        location:'',
        imgOne: "https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        imgTwo: "https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        imgThree: "https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        daihocBachKinhXay: false,
        daihocThangLong: false,
        daihocCongNghiep: false,
       uid:"",


    }
    componentWillMount() {
        if(this.props.project){
            this.setState({
                title: this.props.project.title,
                district: this.props.project.district,
                ward: this.props.project.ward,
                acreage: this.props.project.acreage,
                price: this.props.project.price,
                room:this.props.project.room,
                content:this.props.project.content,
                house: this.props.project.house,
                location:this.props.project.location,
                imgOne: this.props.project.imgOne,
                imgTwo:this.props.project.imgTwo,
                imgThree: this.props.project.imgThree,
                daihocBachKinhXay: this.props.project.daihocBachKinhXay,
                daihocThangLong: this.props.project.daihocThangLong,
                daihocCongNghiep: this.props.project.daihocThangLong,
                uid:this.props.project.uid
          
            })
        }
      }


    isChange = (e) => {
     
        this.setState({
            [e.target.id]: e.target.value,
         
            
        })

    }

    isSubmit = () => {

        this.props.update(this.state,this.props.id)

  


   
    }

    showDistrict = () => {
        if (this.state.district === "1") {
            return (<div>
            <div className="form-group">
                <select onChange={this.isChange} id="ward" className="custom-select" >
                    <option defaultValue> Phường </option>
                    <option value={1}>Bách Khoa</option>
                    <option value={2}>Bạch Mai</option>
                    <option value={3}>Lê Đại Hành</option>
                </select>
                <label className="form-check-label">
                 <input onClick ={this.checkdhBKX} type="checkbox" className="form-check-input" defaultValue="checkedValue" />
                                                            Gần đại học Bách Khoa, Xây Dựng, KTQD
                        </label>
                        </div>
            </div>
     
          
                  
            )
        }
        
        else if (this.state.district === "2") {
            return (
                <div className="form-group">
                    <select onChange={this.isChange} id="ward" className="custom-select" >
                        <option defaultValue> Phường</option>
                        <option value={1}>Minh Khai</option>
                        <option value={2}>Đông Ngạc</option>
                        <option value={3}>Cổ Nhuế 1</option>
                    </select>
                    <label className="form-check-label">
                    <input onClick ={this.checkdhCN} type="checkbox" className="form-check-input" defaultValue="checkedValue" />
                                                            Gần đại học Công Nghiệp
                                                            </label>
                </div>
            )
        }
        else if (this.state.district === "3") {
            return (
                <div className="form-group">
                    <select onChange={this.isChange} id="ward" className="custom-select" >
                        <option defaultValue> Phường </option>
                        <option value={1}>Đại Kim</option>
                        <option value={2}>Định Công</option>
                        <option value={3}>Giáp Bát</option>
                    </select>
                    <label className="form-check-label">
                 <input onClick ={this.checkdhTL} type="checkbox" className="form-check-input" defaultValue="checkedValue" />
                                                            Gần đại học Thăng Long
                        </label>
                </div>
            )
        }
        else return <div className="form-group">
            <select onChange={this.isChange} id="ward" className="custom-select" >
                <option defaultValue> Phường </option>
            </select>
        </div>

    }
checkdhBKX =() =>{
   this.setState({
       daihocBachKinhXay:!this.state.daihocBachKinhXay
   })
}
checkdhTL =() =>{
   this.setState({
       daihocThangLong:!this.state.daihocThangLong
   })
}
checkdhCN =() =>{
   this.setState({
       daihocCongNghiep:!this.state.daihocCongNghiep
   })
}


    render() {
        
  
        // console.log(this.state);
        return (
            <div className="container-fluid container__post">
                <div className="row ">
                    <div className="col-3 ">
                    </div>
                    <div className="col-6 container__post--form text-center">
                        <h5>EDITPOSTER</h5>
                        <div className="form-group">
                            <input onChange={this.isChange} id="title" type="text" className="form-control" aria-describedby="helpId" placeholder="TIÊU ĐỀ CỦA BÀI ĐĂNG"  defaultValue={this.state.title}/>
                        </div>
                        <div className="form-group">
                            <select onChange={this.isChange} id="district" className="custom-select" >
                                <option defaultValue>Quận</option>
                                <option value={1}>Hai Bà Trưng</option>
                                <option value={2}>Bắc Từ Liêm</option>
                                <option value={3}>Hoàng Mai</option>
                            </select>
                        </div>
                        {this.showDistrict()}
                        <div className="form-group">
                            <input onChange={this.isChange} id="location" type="text" className="form-control" aria-describedby="helpId" placeholder="ĐỊA CHỈ CỤ THỂ" defaultValue={this.state.location} />
                        </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="acreage" type="text" className="form-control" aria-describedby="helpId" placeholder="DIỆN TÍCH m&sup2;  eg: 120 " defaultValue={this.state.acreage} />
                        </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="price" type="text" className="form-control" aria-describedby="helpId" placeholder="GIÁ VNĐ  eg: 2.000.000" defaultValue={this.state.price}/>
                            </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="room" type="text" className="form-control" aria-describedby="helpId" placeholder="SỐ PHÒNG TRỐNG   eg: 1 phòng" defaultValue={this.state.room} />
                        </div>

                        <div className="form-group">
                            <textarea onChange={this.isChange} id="content" className="form-control" placeholder="ĐIỀN NỘI DUNG GIỚI THIỆU CĂN HỘ" defaultValue={this.state.content} rows="6" />
                        </div>
            
                        <div className="form-group">
                            <select onChange={this.isChange} id="house" className="custom-select" >
                                <option defaultValue>Loại tài sản </option>
                                <option value={1}>Nhà Đất</option>
                                <option value={2}>Chung cư</option>
                                <option value={3}>Biệt thự</option>
                            </select>
                        </div>
                        
                        
                        <Link to="/search" onClick={this.isSubmit} className="btn btn-warning">Submit</Link>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id;
//    console.log(id)
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    // console.log(project)
  
    return {
      project: project,
      profile: state.firebase.profile,
      authUid: state.firebase.auth,
        id :id
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
          update: (updateUser,id) => {
              dispatch(update(updateUser,id))
          }
      }
  }
  export default compose(
    firestoreConnect([{
      collection: 'projects'
    }]),
    connect(mapStateToProps,mapDispatchToProps)) (FixPost)
  