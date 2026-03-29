import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-around ">

            <div>
                <h1 className='text-3xl font-bold bg-[linear-gradient(90deg,#4F39F6_0%,#7E20F9_67%,rgba(149,20,250,0.64)_100%)] bg-clip-text text-transparent text-3xl font-bold '>
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

            <div className='flex gap-8'>
                 <button>
                    <FiShoppingCart />
                </button> 
                <button>Login</button>
                <button className='btn btn-primary rounded-full w-30 hidden md:block'>Get Started</button>
            </div>
   
</div>
    );
};

export default Navbar;