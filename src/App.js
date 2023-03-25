import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './screens/Login';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
