import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import LiveImg from "../../src/assets/live.png"
import BannarImg from "../../src/assets/banner.png"

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src ={BannarImg} className="max-w-sm rounded-lg shadow-2xl"/>
    <div className='space-y-3' >
        <div className='flex items-center gap-2 bg-blue-200 text-indigo-800 font-semibold p-2 rounded-full w-90'>
            <img src={LiveImg} className='h-5 w-5'  alt="" />
            <p>New: AI-Powered Tools Available</p>
        </div>

        <div className="text-5xl font-bold space-y-5 ">
            <h1>Supercharge Your </h1> 
            <h1>Digital Workflow</h1>

        </div>
      
      <p className="py-6 text-zinc-500">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br />
        Explore Products
      </p>
      <div className='flex gap-4'>
        <button className="btn btn-primary rounded-full">Explore Products</button>
       <button className='btn btn-primary btn-outline rounded-full'> <CiPlay1 />Watch Demo</button>
       
      </div>
    </div>
  </div>

  
</div>
    );
};

export default Bannar;