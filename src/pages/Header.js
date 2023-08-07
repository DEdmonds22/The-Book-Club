import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onSearch }) { // prop passed down from app.js is a func named handleSearch, saved to header's att names onSearch
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const openMenu = () => {
        setMenuIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    const handleSearch = (event) => {   // a diff func named handleSearch, but uses App.js's handleSearch (onSearch), activated when form is submitted.
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <header>
            <div>
                <div id="navBar">
                    <div className="logo">
                        <Link to="/" onClick={closeMenu}>
                            <p>The</p>
                            <p>Book</p>
                            <p>Club</p>
                        </Link>
                    </div>

                    <form onSubmit={handleSearch}>
                        <div className="search-bar">
                            <input
                            type="text"
                            placeholder="Choose Your Book!"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // updates the searchTerm as the user types
                            />
                            <button type="submit">Enter</button>
                        </div>
                    </form>

                    <Link to="/sign-in">
                        <img src="/icons8-user-48.png"/>
                    </Link>

                    <div className="hamburger" onClick={openMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
            </div>
                
                <div className={`nav-menu-container ${menuIsOpen ? "active" : ""}`}>
                    <ul className="nav-menu">
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/" 
                            className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/profile" className="nav-link"> Profile - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/book-shelf" className="nav-link">Book Shelf - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/full-library" className="nav-link">Full Library - in construction</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/book-clubs" className="nav-link">Book Clubs - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/settings" className="nav-link">Settings - TBA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

/*
- "The Book Club" logo
- search bar
- user logo
- hamburger menu
*/