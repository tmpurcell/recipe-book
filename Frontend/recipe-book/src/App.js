import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/index.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import Upload from './pages/upload.js';
import View from './pages/view.js';
import Header from './components/Header.js';
  
function App() { 
    return ( 
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<SignUp />} />
              <Route path='/Upload' element={<Upload />} />
              <Route path='/ViewRecipes' element={<View />} />
            </Routes>
          </Router>
        </div>
    ); 
} 
  
export default App;
