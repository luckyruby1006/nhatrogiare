import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/projectActions'
import { Uploadimg } from './Uploadimg'
import { Link, Redirect } from 'react-router-dom';
class Post extends Component {
    state = {
        title: '',
        district: '',
        ward: '',
        acreage: '',
        price: '',
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
       dateCreate:Date(),


    }

    
    isChange = (e) => {
     
        this.setState({
            [e.target.id]: e.target.value,
            uid:this.props.auth.uid,
            
        })

    }

    isSubmit = () => {

        this.props.createPost(this.state)

  

    }
    upLoadOne = (url) => {
        this.setState({
            imgOne: url
        })
        // console.log(this.state)
    }
    upLoadTwo = (url) => {
        this.setState({
            imgTwo: url
        })
        // console.log(this.state)
    }
    upLoadThree = (url) => {
        this.setState({
            imgThree: url
        })
        // console.log(this.state)
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

        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        // console.log(this.state);
        return (
            <div className="container-fluid container__post">
                <div className="row ">
                    <div className="col-3 ">
                    </div>
                    <div className="col-6 container__post--form text-center">
                        <h5>POSTER</h5>
                        <div className="form-group">
                            <input onChange={this.isChange} id="title" type="text" className="form-control" aria-describedby="helpId" placeholder="TIÊU ĐỀ CỦA BÀI ĐĂNG" />
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
                            <input onChange={this.isChange} id="location" type="text" className="form-control" aria-describedby="helpId" placeholder="ĐỊA CHỈ CỤ THỂ" />
                        </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="acreage" type="text" className="form-control" aria-describedby="helpId" placeholder="DIỆN TÍCH m&sup2;  eg: 120 " />
                        </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="price" type="text" className="form-control" aria-describedby="helpId" placeholder="GIÁ VNĐ  eg: 2.000.000"/>
                            </div>
                        <div className="form-group">
                            <input onChange={this.isChange} id="room" type="text" className="form-control" aria-describedby="helpId" placeholder="SỐ PHÒNG TRỐNG   eg: 1 phòng" />
                        </div>

                        <div className="form-group">
                            <textarea onChange={this.isChange} id="content" className="form-control" placeholder="ĐIỀN NỘI DUNG GIỚI THIỆU CĂN HỘ" defaultValue={this.state.content} rows="6" />
                        </div>
            
                        <div className="form-group">
                            <select onChange={this.isChange} id="house" className="custom-select" >
                                <option defaultValue>Loại tài sản </option>
                                <option value={1}>Nhà Đất</option>
                                <option value={2}>Chung cư</option>
                           
                            </select>
                        </div>
                        
                        
                       

              

            
                        <Uploadimg upLoad={(url) => this.upLoadOne(url)} />
                        <Uploadimg upLoad={(url) => this.upLoadTwo(url)} />
                        <Uploadimg upLoad={(url) => this.upLoadThree(url)} />
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
    return {

        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createPost: (project) => {
            dispatch(createPost(project))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)