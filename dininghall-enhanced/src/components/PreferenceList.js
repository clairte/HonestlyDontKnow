import React, { useState } from 'react';
import Vegetarian from '../images/Preferences-Logo/Vegetarian.png'; 
import notWatchedImg from '../images/CheckBox/not-watched.png'; 
import watchedImg from '../images/CheckBox/watched.png'; 

function Preference() {

    const [ watched, setWatched ] = useState(false); 

    const changeWatchedState = () => {
        setWatched(!watched) 
    }

    return (
        <div>
            <div> 
                <img id = "watched" src= {watched ? watchedImg : notWatchedImg} width = '100px' onClick={changeWatchedState}/> 
            </div>
            <div>
                <img src = {Vegetarian} width = '100px' /> 
            </div>
            <div>
                <h3> Vegetarian </h3>
            </div>
        </div>  
    );
}

function PreferenceList() {

   return (
       <div>
           <Preference /> 
           <Preference />
           <Preference />
       </div>
   );
}

export default PreferenceList;