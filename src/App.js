import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import SignIn from './pages/Sign-In';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookShelf from './pages/Book-Shelf';
import FullLibrary from './pages/Full-Library';
import BookClubs from './pages/Book-Clubs';
import Settings from './pages/Settings';
import BOTM from './pages/Book-Of-The-Month';
import NewClubs from './pages/New-Clubs';
import DisccussionBoard from './pages/Disscussion-Board';
import RecommendedBooks from './pages/Recommended-Books';
import Hosting from './pages/Hosting';
import UpcommingEvents from './pages/UpcommingEvents';

function App() {
  const handleSearch = (searchTerm) => { // used to handle the search func. in the app
    window.location.href = `/full-library?search=${searchTerm}`; // redirect user to new url that includes search term
    /*window.location.href - is used to redirect the page
    alt. useHistory or Link*/
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/book-shelf" element={<BookShelf />} />
        <Route path="/full-library" element={<FullLibrary />} />
        <Route path="/book-clubs" element={<BookClubs />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/book-of-the-month" element={<BOTM />} />
        <Route path="/newly-created-clubs" element={<NewClubs />} />
        <Route path="/discussion-board" element={<DisccussionBoard />} />
        <Route path="/recommended-books" element={<RecommendedBooks />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/upcomming-events" element={<UpcommingEvents />}/>
      </Routes>
    </div>
  );
}

export default App;
