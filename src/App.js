
import './App.css';
import Profile from './Pages/Profile';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Connection from './Pages/Connection';
import Navbar from './Components/Navbar';

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/connections" element={<Connection />} />
        </Routes>

      </div>
  );
  }

export default App;
