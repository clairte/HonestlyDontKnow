import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import Button from '../../components/Button.js'; 
import PreferenceList from '../../components/PreferenceList.js';
import './Preferences.css'; 

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function Preferences() 
{
    const navigate1 = useNavigate; 
  return (
    <div className="Preferences">
      <h1 className = "preferenceTitle"> Select Preferences</h1>  
      <div className = "preferenceList">  
         <PreferenceList /> 
      </div>
      <div>
      <Button 
      onClick = {() => { navigate1("/main");}}
      type = "button" 
      buttonStyle = "btn--main-solid"
      buttonSize = "btn--medium"
      > Continue 
      </Button>
        <Link to= "/dininghallsmain"> Continue </Link>
      </div>
    </div>
  );
}

export default Preferences; 

