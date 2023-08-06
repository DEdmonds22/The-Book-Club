import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function FullLibrary() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );

        if (response.data.items) {
          setSearchResults(response.data.items);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
