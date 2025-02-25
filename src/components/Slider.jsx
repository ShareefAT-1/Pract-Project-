import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    axios
      .get("https://www.dbooks.org/api/recent")
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
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
    <div className="relative w-[1000px] mx-auto mt-6 overflow-hidden">
      {books.length > 0 ? (
        <div>
          <div className="flex gap-5 transition-all duration-300">
            {books
              .slice(startIndex, startIndex + visibleImages)
              .concat(
                books.slice(
                  0,
                  Math.max(0, startIndex + visibleImages - books.length)
                )
              )
              .map((book) => (
                <img
                  key={book.id}
                  src={book.image}
                  alt={"Error"}
                  className="hov flex w-[180px] h-[120px] object-cover rounded-lg"
                />
              ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          >
            ❯
          </button>
        </div>
      ) : (
        alert("Enter Something 🤦‍♂️")
      )}
    </div>
  );
};

export default Slider;
