import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black'>
           <div id='upperdiv' className='grid grid-cols-5 w-full  mx-auto border text-white  p-10 gap-10'>
            <div id='1'>
            <h1 className='mb-5 m-0'>DigiTools</h1>
            <p className='text-gray-500'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>

           </div>

           <div id='2'>
            <h1 className='mb-5'>Product</h1>
            <h3 className='text-gray-400'>Features</h3>
            <h3 className='text-gray-400'>Pricing</h3>
            <h3 className='text-gray-400'>Templates</h3>
            <h3 className='text-gray-400'>Integrations</h3>


           </div>

           <div id='3'>
            <h1 className='mb-5'>Company</h1>
            <h3 className='text-gray-400'>About</h3>
            <h3 className='text-gray-400'>Blog</h3>
            <h3 className='text-gray-400'>Careers</h3>
            <h3 className='text-gray-400'>Press</h3>

           </div>
           <div id='4'>
            <h1 className='mb-5'>Resources</h1>
            <h3 className='text-gray-400'>Documentation</h3>
            <h3 className='text-gray-400'>Help center</h3>
            <h3 className='text-gray-400'>Community</h3>
            <h3 className='text-gray-400'>Contact</h3>

           </div>

           

           <div className="">
                <h2 className="text-2xl font-bold mb-3">Social Links</h2>

                <div className="flex gap-3">
                <div><IoLogoInstagram /></div>
                <div><FaSquareFacebook /></div>
                <div><FaSquareXTwitter /></div>
    
            </div>
            </div>

           </div>


         <div id='lowerdiv' className='bg-red text-zinc-500 grid grid-cols-2 p-4 overflow-hidden'>
            <div><h3>© 2026 Digitools. All rights reserved.</h3></div>
            <div className='grid grid-cols-3'>
                <h3><h3>Privacy Policy</h3></h3>
                <h3>Terms of Service</h3>
                <h3>Cookies</h3>
            </div>
         </div>
            
        </div>
    );
};

export default Footer;