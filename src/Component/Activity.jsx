import React from 'react';

const Activity = () => {
    return (
        
        <div className=' bg-indigo-600 flex  flex-col  md:flex-row justify-center  py-10 gap-6 md:gap-20 space-x-0 md:space-x-15'>
    
 
    <div className='border-b-2 md:border-b-0 md:border-r-2 border-gray-400 px-10 space-y-2 text-center md:text-left '>
        <h1 className='text-3xl font-bold text-white'>50K</h1>
        <p className='text-sm text-white'>Active Users</p>

    </div>

    <div className='border-b-2 md:border-b-0 md:border-r-2  border-gray-400 px-10 space-y-2 text-center md:text-left'>
        <h1 className='text-3xl font-bold text-white'>200+</h1>
        <p className='text-sm text-white'>Premium Tools</p>

    </div>
    <div className='space-y-2 text-center md:text-left'>
        <h1 className='text-3xl font-bold text-white'>4.9</h1>
        <p className='text-sm  text-white'>Rating</p>
        
    </div>

  </div>
    );
};

export default Activity;