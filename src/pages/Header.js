import { useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(prev => !prev)
    }

    return (
        <header>
            <div>
                <div id="navBar">
                    <Link to="/">
                        <p>The Book Club</p>
                    </Link>

                    <input type="text" placeholder="Choose Your Book!"></input>

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
                        <li className="nav-item">
                            <a href="#" className="nav-link">Profile - TBA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Book Shelve</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Full Library</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Book Clubs - TBA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Settings - TBA</a>
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