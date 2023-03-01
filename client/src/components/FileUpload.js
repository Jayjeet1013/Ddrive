import { useState } from "react"
import axios from 'axios'
import './FileUpload.css'
const FileUpload=({contract, account, provider})=> {
  const [file,setFile]=useState(null);
  const [fileName,setFileName]=useState("No image selected");
  const handleSubmit=async(e)=>{
  e.preventDefault();
  if(file){
    try{
      const formData = new FormData();
      formData("file",file)

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: ` 3923de318903e7335703          `,
          pinata_secret_api_key: `  32663863987b234a404b413757c3583c777866003b678eb84f65c18ea7dd47ea`,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      await contract.add(account,ImgHash);
    }catch(e){
      alert("Unable to upload image to pinata");
    }
  }
  };
  const retrieveFile=()=>{

  }
  return <div className="top">
    <form className=" form" onSubmit={handleSubmit}>
      <label htmlFor="file-upload" className="choose">
        choose Image
      </label>
      <input disabled={!account} type="file" id="file-upload" name="data" onChange={retrieveFile}/>
    <span className="textArea">Image: {fileName}</span>
    <button type="submit" className="upload">upload File</button>
    </form>
  </div>
}

export default FileUpload;