
// import { Activity } from 'react'
import './App.css'
import Bannar from './Component/Bannar'
import Navbar from './Component/Navbar'
import Activity from './Component/Activity'
import Footer from './Footer'
import Models from './Component/Models'

const getModels = async () => {
  const res = await fetch ("./models.json")
  return res.json();
}

const getPromise = getModels();




//console.log(modelPromise);

function App() {
   
 
  

  return (
    <>
      
      
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Activity></Activity>
      <Models getPromise = {getPromise} />
      <Footer></Footer>

      
    </>
  )
}

export default App
