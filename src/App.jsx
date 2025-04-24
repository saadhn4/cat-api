import React, { useState } from "react";

const App = () => {
  const [cat, setCat] = useState(null);

  const getCat = async () => {
    setCat(`https://cataas.com/cat?timestamp=${Date.now()}`);
  };
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl mb-5">Cat Generator</h1>
        <button
          className="bg-green-500 text-white font-bold py-2 px-3 rounded-lg mb-8 cursor-pointer"
          onClick={getCat}
        >
          Get cat pic
        </button>
        {cat ? (
          <img
            className="rounded-lg h-[300px] w-[300px]"
            src={cat && cat}
            alt="cat-pic"
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
