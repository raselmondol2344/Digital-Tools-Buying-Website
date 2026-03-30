import React from 'react';

const Steps = () => {
    return (
        <div id='stepcontainer ' className=' max-w-7xl  mx-auto py-20 text-center '>
            <div id='stepheading '>
                <h1 className='text-3xl font-bold mb-3'>Get Started in 3 Steps</h1>
                <p className='text-zinc-500'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div id='setpscards' className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center py-10 gap-2 ' >
                <div id='singlecard1' className=' bg-zinc-200 shadow-4xl p-4 rounded-lg w-full max-w-xs'>
                    <div className='flex justify-end'>
                        <button className='btn  btn-primary rounded-full'>01</button>
                    </div>

                    <div  className=' flex flex-col items-center'>
                        <img className='' src="./user.png" alt="" />
                        <h3 className='text-lg font-semibold mt-2'>Create Account</h3>
                        <p className='mt-2 text-zinc-800'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    

                </div>

                <div id='singlecard2' className=' bg-zinc-200 shadow-4xl p-4 rounded-lg w-full max-w-xs'>
                    <div className='flex justify-end'>
                        <button className='btn  btn-primary rounded-full'>01</button>
                    </div>

                    <div  className=' flex flex-col items-center'>
                        <img className='' src="./user.png" alt="" />
                        <h3 className='text-lg font-semibold mt-2'>Create Account</h3>
                        <p className='mt-2 text-zinc-800'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    

                </div>

                <div id='singlecard3' className=' bg-zinc-200 shadow-4xl p-4 rounded-lg w-full max-w-xs'>
                    <div className='flex justify-end'>
                        <button className='btn  btn-primary rounded-full'>01</button>
                    </div>

                    <div  className=' flex flex-col items-center'>
                        <img className='' src="./user.png" alt="" />
                        <h3 className='text-lg font-semibold mt-2'>Create Account</h3>
                        <p className='mt-2 text-zinc-800'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    

                </div>

            </div>

            
            
            
        </div>
    );
};

export default Steps;