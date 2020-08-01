import React,{useState} from 'react'
import ShowListLocationND from './ShowListLocationND';

export const ShowLocation = (props) => {
  const [bkxHome, setBkxHome] = useState("")
  const { changeStatus } = props;

  const { bkx } = props;

  const showBKX = () => {
    changeStatus()
  }
// show Nhà Đất
  const showHomeBkx = () => {
      const bkxND = bkx.filter(project =>project.house==="1")
    return showHomeND(bkxND)
  }
  const showHomeND =(bkxND) =>{
    return  bkxND.map( project => <ShowListLocationND project={project} key={project.id} />)
  }
// show Chung cư
const showApartmentBkx = () => {
  const bkxCC = bkx.filter(project =>project.house==="2")
return showHomeND(bkxCC)
}
// Show Biệt thự


  return (
    <div className="row text-center element_form--search--find ">
     
      <div className="col-9">

      </div>
      <div className="col-3">
        <div onClick={showBKX} className="btn btn-danger">Back</div>
      </div>
      <div className="col-12">
        <h4><i className="fas fa-home"></i>  Nhà Đất </h4></div>
      {showHomeBkx()}
      <div className="col-12">
        <h4><i className="fas fa-building"> </i> Chung Cư </h4></div>
      {showApartmentBkx()}

    </div>

  )
}
