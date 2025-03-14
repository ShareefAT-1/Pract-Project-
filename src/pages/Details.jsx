import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBox from "../components/Searchbox";

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
      <video 
      src="https://videos.pexels.com/video-files/855592/855592-sd_640_360_25fps.mp4" 
      autoPlay 
      loop 
      muted 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height:'100vh',
        
        objectFit: 'cover' 
      }} ></video>
      <div className="flex justify-center mt-10">
        <SearchBox />
      </div>
      {/* {book.length > 0 ? ( */}
        <div className="absolute opacity-80">
          <div className="p-11" style={{ marginTop: "-20px" }}>
            <h1 className="text-4xl text-blue-300">{book.title}</h1>
            <h2 className="text-3xl text-emerald-200">About Book</h2>
            <h3 className="text-2xl text-emerald-300">{book.authors}</h3>
          </div>
          <div className="flex gap-14 p-16" style={{ marginTop: "-95px" }}>
            <img src={book.image} alt="Error" className=" rounded-2xl" />
            <div className="z-10">
              <h1 className="text-3xl mb-3 text-blue-400">Description</h1>
              <div className="text-white" style={{ width: "600px"}}>
                {book.description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Expedita molestiae debitis reprehenderit
                reiciendis necessitatibus, ut ab tempora nobis vitae optio, nisi
                doloremque et id, modi eligendi tenetur sint? Aliquid, dolores.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, natus cumque voluptate, temporibus, officiis esse
                ipsum minus itaque fugit rerum harum velit expedita ut. Odit
                unde aspernatur similique animi in?
              </div>
            </div>
          </div>
        </div>
      {/* ) : (
        <div class="bg-white rounded-xl p-4 shadow-lg space-y-3">
          <div class="w-[300px] h-[350px] rounded animate-shimmer"></div>
        </div>
      )} */}
    </div>
  );
};

export default Details;
