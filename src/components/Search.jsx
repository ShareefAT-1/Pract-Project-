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
    <div className="bg-fuchsia-950 min-h-screen">
      <input
        className="text-amber-50 bg-blue-300 ml-[650px]"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className=" text-blue-100">
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Search;
