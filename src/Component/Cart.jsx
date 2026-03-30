import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Cart = ({carts , setCarts}) => {
    // console.log(carts);

    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)
    // console.log(totalPrice);

    const handlePayment = () => {
        setCarts([])

        toast.success("Proceed To Checkout")
    }

    const handleDelete = (item) => {
    //     console.log(item);
    const filterArray = carts.filter (d => d.id !== item.id)
    //console.log(filterArray);
    setCarts(filterArray)

    toast.success("Removed Product")
     }
    return (
        <div id='cartDiv' className=' p-5 md:p-10 lg:p-20 max-w-7xl  mx-auto space-y-5 border border-zinc-300 rounded-md'>
           
           <h1 className='text-2xl font-bold mb-10 '>Your Cart </h1> 



           {

                    carts.length === 0 ? (
                // Empty State
                <div className="text-center py-16 flex justify-center ">
                    <h2 className="text-xl font-semibold text-gray-500">
                    Your cart is empty
                    </h2>
                </div> ) :

            carts.map(item => 
            <div  className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center px-5 py-3 bg-zinc-200 rounded-lg" key={item.id}> 

                <div className='flex justify-center gap-7'>
                    <div id='icon ' className=' flex items-center'>
                        <button  className=" border border-gray-200 bg-zinc-200 rounded-full p-2">{item.icon}</button>
                    </div>

                    <div id='details' className='flex flex-col gap-2'>
                        <div id='itemName'> 
                            <h3 className='text-md font-semibold'>{item.name}</h3>
                        </div>
                        <div id='Price' className="flex items-center mb-3">
                                <p className="text-lg font-bold">${item.price}</p>
                                <p className="text-zinc-500">/{item.period}</p>
                            </div>
                    </div>

                </div>

                <div>
                    <button onClick={()=>handleDelete(item)} className='btn text-red-700 bg-transparent'>Remove</button>

                </div>

            </div>
            )
           }


           <div className='flex  justify-between p-5 mt-10 bg-black text-2xl text-white rounded-lg'>
            <div>Total</div>
            <div>${totalPrice}</div>
           </div>

           <button onClick={handlePayment} className='btn btn-primary w-full  text-lg font-bold'>Proceed To Checkout</button>
        </div>
    );
};

export default Cart;