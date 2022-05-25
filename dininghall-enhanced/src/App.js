import './App.css'; 
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import DiningHallsMain from './Frontend/Screens/DiningHallsMain.js'; 
import Preferences from './Frontend/Screens/Preferences.js'; 
import Sign_In from './Frontend/Screens/Sign_In.js'; 

function App() {

  return (
    <Router>
        <Routes>
          <Route path = "/" element= {<Sign_In />} /> 
          <Route path = "/preferences" element= {<Preferences />} /> 
          <Route path = "/dininghallsmain" element= {<DiningHallsMain />} /> 
        </Routes>
      <div className="App">

       </div>
    </Router>
    
  );
}

export default App; 