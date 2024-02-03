import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/index.js';
import Login from './pages/login.js';
import Header from './components/Header.js';
  
function App() { 
    return ( 
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
            </Routes>
          </Router>
        </div>
    ); 
} 
  
export default App;
