import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({carts}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-around ">

            <div>
                <h1 className=' font-bold bg-[linear-gradient(90deg,#4F39F6_0%,#7E20F9_67%,rgba(149,20,250,0.64)_100%)] bg-clip-text text-transparent text-3xl '>
                    DigiTools
                </h1>
            </div>
            <div className="hidden md:block">
                <ul className='flex justify-center gap-10 '>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>

            <div id='carticon' className='flex gap-8'>
                 <button className='relative'>
                    <FiShoppingCart  size = {22}/>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">{carts.length}</span>
                   
                </button> 
                <button>Login</button>
                <button className='btn btn-primary rounded-full w-30 hidden md:block'>Get Started</button>
            </div>
   
</div>
    );
};

export default Navbar;