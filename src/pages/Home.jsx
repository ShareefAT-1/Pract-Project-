import React, { useEffect } from "react";
import logo from "../assets/images/logo2.png";
import Slider from "../components/Slider";
import axios from "axios";
import SearchBox from "../components/Searchbox";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get("https://www.dbooks.org/api/recent")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching books:", error);
  //     });
  // }, []);
  const user=JSON.parse(localStorage.getItem("user"))

  return (
    <div >
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="ml-8">
          <img src={logo} className="rounded-3xl" width={50} alt="Logo" />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => navigate("/allbooks")}
            >
              All Books
            </a>
          </li>
          <li>
            <a href="/aboutus" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="/awards" className="hover:text-gray-400">
              Awards
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-400">
              Subscribe
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4 mr-20">
          {/* <input
            type="text"
            placeholder="Search..."
            className="bg-fuchsia-900 px-10 py-2 rounded text-white focus:outline-none focus:ring focus:ring-gray-600"
          /> */}
          <SearchBox />
          {!user?<div>

            <button
              className=" bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded mr-3"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => navigate("/register")}
            >
              Register
            </button>

          </div>:<h1 onClick={()=>navigate("/profile")}>
            {user.username} 
            </h1>}
        </div>
      </nav>

      {/* <div className="flex justify-center mt-5">
        <div className=" h-[54px]" style={{ width: "750px" }}>
        </div>
      </div> */}
      <div className=" mt-7">
        <Slider category={"python"} />
      </div>
      <div>
        <Slider category={"javascript"} />
      </div>
      <div>
        <Slider category={"Computer"} />
      </div>
      <div>
        <Slider category={"History"} />
      </div>

      {/* <div className="flex justify-center h-60">
        
        <img src="https://media3.giphy.com/media/iJJ6E58EttmFqgLo96/giphy.webp?cid=790b7611nwd4dwm3spmqqkehm6sqlveuo5xddu1fnueuds6h&ep=v1_gifs_trending&rid=giphy.webp&ct=g" alt="" />

      </div> */}

    </div>
  );
};

export default Home;
