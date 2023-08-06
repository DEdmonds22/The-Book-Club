import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onSearch }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

    return (
        <header>
            <div>~
                <div id="navBar">
                    <Link to="/">
                        <p>The Book Club</p>
                    </Link>

                    <form onSubmit={handleSearch}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Choose Your Book!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Enter</button>
          </div>
        </form>

                    <Link to="/sign-in">
                        <p>user logo</p>
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
                            <Link to="/profile" className="nav-link"> Profile - TBA</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/book-shelf" className="nav-link">Book Shelf</Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <Link to="/full-library" className="nav-link">Full Library</Link>
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