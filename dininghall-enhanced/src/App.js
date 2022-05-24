import './App.css'; 
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import Dining_Halls_Main from './Frontend/Screens/Dining_Halls_Main.js'; 
import Button from './components/Button.js'; 
import PreferenceList from './components/PreferenceList.js';
import Preferences from './Frontend/Screens/Preferences.js'; 

function App() {

  return (
    <Router>
        <Routes>
          <Route path = "/" element= {<Dining_Halls_Main />} /> 
          <Route path = "/preferences" element= {<Preferences />} /> 
        </Routes>
      <div className="App">

       </div>
    </Router>
    
  );
}

export default App;
