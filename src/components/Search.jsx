import React, { useState, useEffect } from "react";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://www.dbooks.org/api/search/${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.books) {
          setBooks(data.books);
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="bg-fuchsia-950 min-h-screen p-5">
      <input
        className="text-amber-50 bg-blue-300 px-4 py-2 rounded ml-[650px] focus:outline-none focus:ring focus:ring-gray-600"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex flex-wrap justify-center mt-5">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-800 text-white m-3 p-4 rounded-lg w-[300px]">
            <div className="flex flex-col items-center">


              <div className="mb-3">
                <img src={book.image} alt={book.title} className="w-40 h-60 rounded" />
              </div>


              <div className="text-center">
                <h2 className="text-lg font-semibold hover:text-cyan-400">{book.title}</h2>
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
