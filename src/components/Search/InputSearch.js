import React, { useState } from 'react'
import Search from '../Search';

const InputSearch = (props) => {
  const { projects, showListHome } = props;
  const [search, setSearch] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [district, setDistrict] = useState("")
  const [ward,setWard] = useState("")
  // console.log(props)          
  const isChange = (e) => {

    setSearch([e.target.id] = e.target.value);
    let searchInput = [];
    projects.forEach(project => {
      if (project.title.indexOf(search) !== -1) {
        return searchInput.push(project)
      }
    })
    console.log(searchInput)
    showListHome(searchInput)
    setSearchInput(searchInput)


  }

// CHangeDIstrict
  const isChangeDistrict = (e) => {
    [e.target.id] = e.target.value
    let searchDistrict = [];
    if (searchInput === "") {
      projects.forEach(project => {
        if (project.district.indexOf([e.target.id]) !== -1) {
          return searchDistrict.push(project)

        }
      })
      showListHome(searchDistrict)
     
      setDistrict(searchDistrict)
    }
    else {
      searchInput.forEach(project => {
        if (project.district.indexOf([e.target.id]) !== -1) {
          return searchDistrict.push(project)
        }

      })
      showListHome(searchDistrict)
      setDistrict(searchDistrict)
  
    }
  }
// changeWard
  const isChangeWard = (e) => {
    [e.target.id] = e.target.value
    let searchWard = [];
    if (district === "") {
      projects.forEach(project => {
        if (project.ward.indexOf([e.target.id]) !== -1) {
          return searchWard.push(project)

        }
      })
      showListHome(searchWard)
      setWard(searchWard)
 
    }
    else {
      district.forEach(project => {
        if (project.ward.indexOf([e.target.id]) !== -1) {
          return searchWard.push(project)
        }

      })
      showListHome(searchWard)
      setWard(searchWard)
      
    }
  }


  const showWard = () => {
    const districtValue = { ...district[0] }
    console.log(districtValue.district)
    if (districtValue.district === "1") {
      return <div className=" dropdown__form--search">
        <div className="form-group ">
          <select onChange={isChangeWard} id="district" className="custom-select btn-secondary " >
            <option defaultValue>  Phường </option>
            <option value={1}>Bách Khoa</option>
            <option value={2}>Bạch Mai</option>
            <option value={3}>Lê Đại Hành</option>
          </select>
        </div>
      </div>
    }

    else if (districtValue.district === "2")
     {
      return <div className=" dropdown__form--search">
        <div className="form-group ">
          <select onChange={isChangeWard} id="district" className="custom-select btn-secondary " >
            <option defaultValue>  Phường </option>
            <option value={1}>Minh Khai</option>
            <option value={2}>Đông Ngạc</option>
            <option value={3}>Cổ Nhuế 1</option>
          </select>
        </div>
      </div>
    }
    else if (districtValue.district === "3")
     {
      return <div className=" dropdown__form--search">
        <div className="form-group ">
          <select onChange={isChangeWard} id="district" className="custom-select btn-secondary " >
            <option defaultValue>  Phường </option>
            <option value={1}>Đại Kim </option>
            <option value={2}>Định Công</option>
            <option value={3}>Giáp Bát</option>
          </select>
        </div>
      </div>
    }
    else 
     {
      return <div className=" dropdown__form--search">
        <div className="form-group ">
          <select  id="district" className="custom-select btn-secondary " >
            <option defaultValue>  Phường </option>
          </select>
        </div>
      </div>
    }

  }

  const isChangeHouse = (e) => {
    [e.target.id] = e.target.value
    let searchHouse = [];
    if (district === ""||ward === "") {
      projects.forEach(project => {
        if (project.house.indexOf([e.target.id]) !== -1) {
          return searchHouse.push(project)

        }
      })
      showListHome(searchHouse)
      
 
    }
    else {
      ward.forEach(project => {
        if (project.house.indexOf([e.target.id]) !== -1) {
          return searchHouse.push(project)
        }

      })
      showListHome(searchHouse)
    
      
    }
  }

  return (

    <div className="row container_form--search--find">
      <input onChange={isChange} id="search" type="text" className="form-control" style={{ width: '300px', marginLeft: '10px' }} aria-describedby="helpId" placeholder="Bạn cần tìm gì" />
      <div className="btn btn-secondary"><i className="fas fa-search"></i> Tìm Kiếm</div>

      <div className=" dropdown__form--search">
        <div className="form-group ">
          <select onChange={isChangeDistrict} id="district" className="custom-select btn-secondary " >
            <option defaultValue>  Quận </option>
            <option value={1}>Hai Bà Trưng</option>
            <option value={2}>Bắc Từ Liêm</option>
            <option value={3}>Hoàng Mai</option>
          </select>
        </div>
      </div>

      {showWard()}
      <div className=" dropdown__form--search">
        <div className="form-group ">
          <select  onChange={isChangeHouse} id="house" className="custom-select btn-secondary " >
            <option defaultValue>  Loại tài sản </option>
            <option value={1}>Nhà Đất</option>
            <option value={2}>Chung cư</option>
      
          </select>
        </div>
      </div>
    </div>





  )
}

export default InputSearch
