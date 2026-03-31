import React from 'react';

const Workflow = () => {
    return (
        <div className='items-center bg-indigo-700 p-20 text-center'>
            <div className='mb-4'>
                <h1 className='text-2xl font-bold mb-4 text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-white mb-4'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>

            {/* <div className=' flex gap-5 text-center'> */}
                <button className='btn bg-white text-indigo-700 rounded-full mr-5'>Explore Products</button>
                <button className='  bg-none rounded-full border border-white text-white px-3 p-2'>View Pricing</button>
            {/* </div> */}
            <p className='text-white mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
             
        </div>
    );
};

export default Workflow;