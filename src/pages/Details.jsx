import React from "react";

const Details = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search..."
          className=" bg-fuchsia-900 px-10 py-2 rounded  text-white focus:outline-none focus:ring focus:ring-gray-600"
        />
      </div>
      <div className="p-11 " style={{marginTop:"-20px"}}>
        <h1 className="text-4xl text-blue-400">Book Name</h1>
        <h2 className="text-3xl text-cyan-200">About Book</h2>
        <h3 className="text-2xl text-emerald-300">Book Written By</h3>
      </div>
      <div className="flex gap-14 p-16" style={{ marginTop: "-95px" }}>
        <div className="bg-blue-900 h-72 w-64">Img</div>
        <div>
          <h1 className="text-3xl mb-3 text-blue-400">Description</h1>
          <div style={{ width: "900px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eum earum iste porro ea. Hic tempore id amet quidem nemo, iure
            aspernatur cupiditate eos voluptatum odio quasi accusamus eaque.
            Explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores eum earum iste porro ea. Hic tempore id amet quidem nemo,
            iure aspernatur cupiditate eos voluptatum odio quasi accusamus
            eaque. Explicabo? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores eum earum iste porro ea. Hic tempore id
            amet quidem nemo, iure aspernatur cupiditate eos voluptatum odio
            quasi accusamus eaque. Explicabo? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores eum earum iste porro ea.
            Hic tempore id amet quidem nemo, iure aspernatur cupiditate eos
            voluptatum odio quasi accusamus eaque. Explicabo? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Asperiores eum earum iste
            porro ea. Hic tempore id amet quidem nemo, iure aspernatur
            cupiditate eos voluptatum odio quasi accusamus eaque. Explicabo?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eum earum iste porro ea. Hic tempore id amet quidem nemo, iure
            aspernatur cupiditate eos voluptatum odio quasi accusamus eaque.
            Explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores eum earum iste porro ea. Hic tempore id amet quidem nemo,
            iure aspernatur cupiditate eos voluptatum odio quasi accusamus
            eaque. Explicabo?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
