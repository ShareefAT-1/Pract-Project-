import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

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

  const handleEnter=(e)=>{
    e.preventDefault()
    navigate(`/searchResults/${query}`);
  }

  return (
    <div className="bg-fuchsia-950 relative ">
      <form action="" onSubmit={handleEnter}>
        <input
          className="text-amber-50 bg-blue-900 px-4 py-2 rounded  focus:outline-none focus:ring focus:ring-gray-600"
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="flex flex-wrap  absolute z-10 bg-black  h-[300px] overflow-auto  justify-center ">
        {query&&books.map((book) => (
          <div
            onClick={() => {
              navigate(`/bookdetails/${book.id}`)
              setQuery("")
            }}
            key={book.id}
            className="bg-gray-800 text-white m-3 p-4 rounded-lg w-[300px]"
          >
            <div className="flex flex-col items-center">
              <div className="text-center">
                <h2 className="text-lg font-semibold hover:text-cyan-400 line-clamp-1">
                  {book.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
