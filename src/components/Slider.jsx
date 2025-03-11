import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Slider = ({category}) => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const visibleImages = 5;
  const navigate=useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.dbooks.org/api/search/${category}`)
      .then((res) => {
        console.log(res)
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="relative w-[1200px] mx-auto mt-10 ">
      {" "}

      {books.length > 0 ? (
        <div>
          <div className="flex  gap-6 ">
            {" "}

            {books
              .slice(startIndex, startIndex + visibleImages)
              .concat(
                books.slice(
                  0,
                  Math.max(0, startIndex + visibleImages - books.length)
                )
              )
              .map((book) => (
                <div className=" hover:scale-110 w-[220px] h-[300px]  transition-all duration-300 rounded-lg overflow-hidden border border-gray-500">
                  <img
                  key={book.id}
                  src={book.image}
                  alt={"Error"}
                  onClick={()=>navigate(`/bookdetails/${book.id}`)}
                  className="  flex  w-full h-full object-cover "
                />
                </div>
              ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-3 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-3 rounded-full"
          >
            ❯
          </button>
        </div>
      ) : (
        <div class="bg-white rounded-xl p-4 shadow-lg space-y-3">
          <div class="w-full h-48 rounded animate-shimmer"></div>
        </div>
      )}
    </div>
  );
};

export default Slider;
