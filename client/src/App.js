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

        window.ethereum.on("chainChanged",() =>{
           window.location.reload();
        });

        window.ethereum.on("accountsChanged",()=>{
             window.location.reload();
        });
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = " 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

        const contract = new ethers.Contract(
          contractAddress,Upload.abi,signer
        )
          console.log(contract);
          setContract(contract)
          setProvider(provider)
      }else{
        console.log("metamask is not installed");
      }
    };
    provider && loadProvider();
  },[]);
    return <div className='App'> 
    <h1 style={{color:'yellow'}}>Ddrive</h1>
    <div className='bg'></div>
    <div className='bg bg2'></div>
    <div className='bg bg3'></div>

   <p>Account: {account ? account : "Not connected "}</p>
   <FileUpload provider={provider} contract={contract} account={account}></FileUpload>
    </div>
}

export default App;