// Slider.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const visibleImages = 5;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.dbooks.org/api/recent")
      .then((res) => {
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
    <div className="relative w-[1200px] mx-auto mt-8 overflow-hidden">
      {" "}
      {/* Increased from 1000px to 1200px */}
      {books.length > 0 ? (
        <div>
          <div className="flex gap-6 transition-all duration-300">
            {" "}
            {/* Increased gap from 5 to 6 */}
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
                  className="hov flex w-[220px] h-[150px] object-cover rounded-lg"
                />
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
