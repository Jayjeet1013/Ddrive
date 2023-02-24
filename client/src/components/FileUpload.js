import { useState } from "react"
import axios from 'axios'
import './FileUpload.css'
const FileUpload=({contract, account, provider})=> {
  return <div className="top">
    <form className=" form" onSubmit={handleSubmit}></form>
  </div>
}

export default FileUpload;