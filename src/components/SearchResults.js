import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";


  const fetchSearchResults = async () => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=30`);
        const data = await response.json();
        console.log(data.items);
        console.log(searchTerm)
        setResults(data.items)
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchSearchResults()
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="book-con">
        {results.map((book) => (
          <div key={book.id} className="book" >
            <h2>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
            <p>by: {book.volumeInfo.authors?.join(", ")}</p>
            <button>Add to Bookshelf</button>
          </div>
        ))}
        </div>
    </div>
  );
}
