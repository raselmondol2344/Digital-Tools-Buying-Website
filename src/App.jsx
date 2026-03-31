
// import { Activity } from 'react'
import './App.css'
import Bannar from './Component/Bannar'
import Navbar from './Component/Navbar'
import Activity from './Component/Activity'
import Footer from './Footer'
import Models from './Component/Models'
import Cart from './Component/Cart'
import { useState } from 'react'
import Steps from './Component/Steps'
import Priceing from './Component/Priceing'
import Workflow from './Component/Workflow'



// const getModels = async () => {
//   const res = await fetch ("./models.json")
//   return res.json();
// }

const getModels = async () => {
  const res = await fetch("/models.json");
  console.log(res);
  return res.json();
}

const getPromise = getModels();




//console.log(modelPromise);

function App() {

  const [activeTab , setActiveTab] = useState("Products")
   //console.log(activeTab);
 
   const [carts , setCarts] = useState([])
  //  console.log(carts);

  return (
    <>
      
      
      <Navbar carts = {carts}></Navbar>
      <Bannar></Bannar>
      <Activity></Activity>

      <div id="tabSection">
        
        <div className="tabs tabs-box bg-transparent mt-10 justify-center">
          <input
            type="radio"
            name="my_tabs_1"
            
            className={`tab rounded-full w-40 ${activeTab === "Products" ? "tab-active bg-blue-500 text-white" : ""}`}
            aria-label="Products"
            onClick={()=>setActiveTab("Products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            
            className={`tab rounded-full w-40 ${activeTab === "Cart" ? "tab-active bg-blue-500 text-white" : ""}`}
            //aria-label="Cart"
            aria-label={`Cart (${carts.length})`}
            onClick={()=>setActiveTab("Cart")}
            
          />
        </div>
      </div>
      { activeTab === "Products" && <Models getPromise = {getPromise}  carts={carts} setCarts ={setCarts} />}
      {activeTab === "Cart" && <Cart carts = {carts} setCarts = {setCarts}></Cart>}

      <Steps></Steps>
      <Priceing></Priceing>
      <Workflow></Workflow>
      <Footer></Footer>

      
    </>
  )
}

export default App
