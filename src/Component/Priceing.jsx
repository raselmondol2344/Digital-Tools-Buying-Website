import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Priceing = () => {
    return (
        <div>

            
        <div id='priceingtittle' className='text-center'>
                <h1 className='text-3xl font-bold mb-3'>Simple, Transparent Pricing</h1>
                <p className='text-zinc-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div id='forcardCenter' className='min-h-screen flex justify-center items-center px-4 lg:-mt-30'>

                
                <div id='priceingCardContainers' className=' py-10 grid md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center'>

                <div id='priceCard1 ' className='  w-full max-w-sm text-center border flex flex-col items-start py-4 px-4 border-zinc-300 shadow-2xl rounded-lg'>
                    
                    <h3 className='text-xl font-semibold mb-2'>Starter</h3>
                    <p className='text-zinc-600 mb-2'>Perfect for getting started</p>
                    <p><span className='text-3xl font-bold'>$0</span> <span className='text-zinc-500'>/month</span></p>
                   

                    <ul className=' mt-2 mb-5 ' >
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>  Access to 10 free tools</li>
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>Basic templates</li>
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span> Community support</li>
                         <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span> project per month</li>
                    </ul>
                     
                     <div className='flex justify-center w-full'>
                        <button className='btn btn-primary rounded-full w-full '>Get Start Free</button>

                     </div>


                </div>


                <div id='priceCard2 ' className='  w-full max-w-sm text-center border flex flex-col items-start py-4 px-4 border-zinc-300 shadow-2xl rounded-lg bg-blue-800  relative scale-105'>
                    
                    <p className='absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full shadow'>Most Popular</p>

                    <h3 className='text-xl font-semibold mb-2 text-white'>Pro</h3>
                    <p className='text-white mb-2'>Best for professionals</p>
                    <p><span className='text-3xl font-bold text-white'>$29</span> <span className='text-white'>/month</span></p>
                   

                    <ul className=' mt-2 mb-5 ' >
                        <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Access to all premium tools</li>
                        <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Unlimited templates</li>
                        <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Priority support</li>
                        <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Unlimited projects</li>
                         <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Cloud sync</li>
                        <li className='flex gap-3 items-center text-white'> <span className='text-white'>< IoMdCheckmark /></span>Advanced analytics</li>
                    </ul>
                     
                     <div className='flex justify-center w-full'>
                        <button className='btn w-full rounded-full  font-bold '>Start Pro Trial</button>

                     </div>


                </div>


                 <div id='priceCard3 ' className=' w-full max-w-sm text-center border flex flex-col items-start py-4 px-4 border-zinc-300 shadow-2xl rounded-lg'>
                    
                    <h3 className='text-xl font-semibold mb-2'>Enterprise</h3>
                    <p className='text-zinc-600 mb-2'>For teams and businesses</p>
                    <p><span className='text-3xl font-bold'>$99</span> <span className='text-zinc-500'>/month</span></p>
                   

                    <ul className=' mt-2 mb-5 ' >
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>  Everything in Pro</li>
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>Team collaboration</li>
                        <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>Custom integrations</li>
                         <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>Dedicated support</li>
                         <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>SLA guarantee</li>
                         <li className='flex gap-3 items-center text-zinc-500'> <span className='text-green-700'>< IoMdCheckmark /></span>Custom branding</li>
                    </ul>
                     
                     <div className='flex justify-center w-full'>
                        <button className='btn btn-primary rounded-full w-full '>Contact Sales</button>

                     </div>


                </div>


                </div>
            </div>

                

            </div>
            
        
    );
};

export default Priceing;