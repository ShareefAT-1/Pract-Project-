import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.dbooks.org/api/book/${id}`)
      .then((res) => {
        console.log(res);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search..."
          className=" bg-fuchsia-900 px-10 py-2 rounded  text-white focus:outline-none focus:ring focus:ring-gray-600"
        />
      </div>
      <div className="p-11 " style={{ marginTop: "-20px" }}>
        <h1 className="text-4xl text-blue-400">{book.title}</h1>
        <h2 className="text-3xl text-cyan-200">About Book</h2>
        <h3 className="text-2xl text-emerald-300">{book.authors}</h3>
      </div>
      <div className="flex gap-14 p-16" style={{ marginTop: "-95px" }}>
        <img src={book.image} alt="Error" />
        <div>
          <h1 className="text-3xl mb-3 text-blue-400">Description</h1>
          <div style={{ width: "600px" }}>
           {book.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestiae debitis reprehenderit reiciendis necessitatibus, ut ab tempora nobis vitae optio, nisi doloremque et id, modi eligendi tenetur sint? Aliquid, dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, natus cumque voluptate, temporibus, officiis esse ipsum minus itaque fugit rerum harum velit expedita ut. Odit unde aspernatur similique animi in?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
