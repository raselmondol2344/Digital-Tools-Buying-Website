import { use } from "react";

import ModelCard from "./ModelCard";

const Models = ({ getPromise,carts , setCarts }) => {
  const model = use(getPromise);
  // console.log(model);

  return (
    <div className="py-20 max-w-7xl  mx-auto px-4">
      

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {model.map((item) => (
          <ModelCard item={item} key={item.id} carts={carts} setCarts ={setCarts}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
