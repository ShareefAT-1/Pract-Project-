import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.dbooks.org/api/search/javascript")
      .then((response) => response.json())
      .then((data) => {
        if (data.books) {
          setBooks(data.books);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-fuchsia-950 min-h-screen p-5">
      <div className="flex flex-wrap justify-center mt-5">
        {books.map((book) => (
          <div
            onClick={() => navigate(`/bookdetails/${book.id}`)}
            key={book.id}
            className="bg-gray-800 text-white m-3 p-4 rounded-lg w-[300px]"
          >
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-40 h-60 rounded"
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold hover:text-cyan-400">
                  {book.title}
                </h2>
                <p className="text-gray-400">{book.subtitle}</p>
                <p className="text-emerald-300">{book.authors}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
