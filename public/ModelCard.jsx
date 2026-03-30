import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

const ModelCard = ({item , carts , setCarts}) => {
      const [isBuy ,setIsBuy] = useState(false)


      const handleBuy = () => {
         setIsBuy(true)
         setCarts ([...carts,item])
         toast.success("Added To Cart")

      }
    return (
        <div className="shadow-lg rounded-lg border p-10 overflow-hidden border-zinc-300">
                        <div className="flex  justify-between mb-3">
                            <button className=" border border-gray-200 rounded-full p-2 bg-zinc-200">{item.icon}</button> <br />
                            <button className= {item.tagType === "new" ? "btn btn-dash btn-info"
                                             : item.tagType === "best seller" ? "btn btn-dash btn-secondary"
                                             : item.tagType === "popular"? "btn btn-dash btn-primary"
                                             : "btn"}>{item.tagType}</button>
                        </div>

                        <div >
                            <h1 className="text-2xl font-bold mb-3">{item.name}</h1>
                            <p className="text-zinc-500 mb-3">{item.description}</p>
                            <div className="flex items-center mb-3">
                                <p className="text-lg font-bold">${item.price}</p>
                                <p className="text-zinc-500">/{item.period}</p>
                            </div>
                             
 
                            <ul className="mb-5">
                            {item.features.map((feature, i) => (
                                <li className="flex gap-4  text-zinc-500" key={i}> <span className="text-green-600">< IoMdCheckmark /></span> {feature}</li>
                            ))}
                            </ul> 

                            <button onClick={handleBuy} className="btn btn-primary rounded-full w-full">{isBuy ? "Added to Cart" : "Buy Now"}</button>

                        </div>

                    </div>
        
    );
};

export default ModelCard;