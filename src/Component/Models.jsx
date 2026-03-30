import { use } from "react";

import ModelCard from "../../public/ModelCard";

const Models = ({ getPromise,carts , setCarts }) => {
  const model = use(getPromise);
  // console.log(model);

  return (
    <div className="py-20 max-w-7xl  mx-auto">
      

      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {model.map((item) => (
          <ModelCard item={item} key={item.id} carts={carts} setCarts ={setCarts}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
