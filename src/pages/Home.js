import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main id="home-page">
            <main id="container">
                <Link to="/book-of-the-month" class="bookOfTheMonth top">
                    <h2>Book of The Month</h2>
                </Link>

                <Link to="/newly-created-clubs" class="newlyCreatedClubs top">
                    <h2>Newly Created Clubs!</h2>
                </Link>

                <Link to="/profile" class="profile">
                    <h2>Profile</h2>
                </Link>

                <Link to="/discussion-board" class="bookClubDiscussionBoard top">
                    <h2>Book Club Discussion Board</h2>
                </Link>

                <Link to="/recommended-books" class="recommendedBooks">
                    <h2>Recommended Books</h2>
                </Link>

                <Link to="/hosting" class="hosting bottom">
                    <h2>Hosting</h2>
                </Link>

                <Link to="/upcomming-events" class="upcommingEvents bottom">
                    <h2>Upcomming Events</h2>
                </Link>
            </main>
        </main>
    )
}