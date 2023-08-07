import { useState, useEffect } from "react";
import axios from "axios";  // makes HHTP request
import { useLocation } from "react-router-dom"; // used for accessing the current location (url) of the React application, such as the pathname, search parameter, and hash

export default function FullLibrary() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation(); // the variable now holds the current location object including the search property, which holds several properties. 
  const queryParams = new URLSearchParams(location.search); // location.search = "?q={searchTerm}" ie "...?q=react&page=1", URLSearchParms breaks it down into key: values: "q": "react", "page": "1". 
  const searchTerm = queryParams.get("search") || "";

  useEffect(() => { // called whenever component is mounted and wheneve"searchTerm changes.
    const fetchSearchResults = async () => {  // will always return a promise, even if you dont explicity use the return keyword inside of the functiion
      try {
        const response = await axios.get( // await keyword is used to wait for a promise to resolved before mvoing forward
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );

        if (response.data.items) {  // the response obj is the result of the api call made using axios, the data property of the response object contains the actual data returned by the api, the response data has a property named items which holds an array of book items that match the search term.
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
      <div className="book-con">
        {searchResults.map((book) => (
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
