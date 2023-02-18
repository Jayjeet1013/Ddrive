import Upload from './artifacts/contracts/Upload.sol/Upload.json'
import  "./App.css"
import {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import FileUpload from './components/FileUpload'
import Modal from './components/Modal'
import Display from './components/Display'
function  App(){
  const [account,setAccount] =useState("");
  const [contract,setContract] =useState(null);
  const [provider,setProvider] = useState(null);
  const [modalOpen,setModalOpen]= useState(false);
  
  useEffect(()=>{
    const provider= new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider=async()=>{
      if(provider){
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = " 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

        const contract = new ethers.Contract(
          contractAddress,Upload.abi,signer
        )
          setContract(contract)
          setProvider(provider)
      }else{
        console.log("metamask is not installed");
      }
    };
    provider && loadProvider();
  },[]);
    return <div className='App'> </div>
}

export default App;