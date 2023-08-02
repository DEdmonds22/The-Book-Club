import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import SignIn from './pages/Sign-In';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
