import React, { useState } from 'react';
import { storage } from '../config/fbConfig' ;

export const Uploadimg = ({upLoad}) => {

    const [image,setImage] = useState(null);
    const [url, setUrl] = useState(null)
     console.log(url)

const handleChange = (e) =>{ 
     if(e.target.files[0]){
         setImage(e.target.files[0]);
     }
 }
 
 const handleUpload = () =>{
const uploadTask = storage.ref(`images/${image.name}`).put(image);
uploadTask.on(
    "state_changed",
    snapshot => {},
    error =>{
        console.log(error);
    },
    ()=>{
        storage.ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url=>{
            // console.log(url);
            setUrl(url)
            upLoad(url)
        });
    }
);
          

 };
    return (
        <div>
        
            <input type ="file" onChange ={handleChange} />

            <button onClick={handleUpload} >Upload ảnh 1</button>
            
        </div>
    )
}
