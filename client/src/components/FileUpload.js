import { useState } from "react"
import axios from 'axios'
import './FileUpload.css'
const FileUpload=({contract, account, provider})=> {
  const handleSubmit=async(e)=>{

  }
  const retrieveFile=()=>{

  }
  return <div className="top">
    <form className=" form" onSubmit={handleSubmit}>
      <label htmlFor="file-upload" className="choose">
        choose Image
      </label>
      <input disabled={!account} type="file" id="file-upload" name="data" onChange={retrieveFile}/>
    <span className="textArea">Image:#temporary.png</span>
    <button type="submit" className="upload">upload File</button>
    </form>
  </div>
}

export default FileUpload;