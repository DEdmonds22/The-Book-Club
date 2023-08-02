
export default function Nav() {
    return (
        <header>
            <div id="navBar">
                <p>The Book Club</p>
                <input type="text" placeholder="Choose Your Book!"></input>
                <p>user logo</p>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
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
        </header>
    )
}

/*
- "The Book Club" logo
- search bar
- user logo
- hamburger menu
*/