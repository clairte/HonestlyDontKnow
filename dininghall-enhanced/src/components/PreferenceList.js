import React, { useState } from 'react';

import Vegetarian from '../images/Preferences-Logo/Vegetarian.png'; 
import Vegan from '../images/Preferences-Logo/Vegan.png'; 
import Peanuts from '../images/Preferences-Logo/Peanuts.png'; 
import TreeNuts from '../images/Preferences-Logo/Tree-Nuts.png'; 
import Wheat from '../images/Preferences-Logo/Wheat.png'; 
import Fish from '../images/Preferences-Logo/Fish.png'; 
import LowCarbon from '../images/Preferences-Logo/Low-Carbon.png'; 
import HighCarbon from '../images/Preferences-Logo/High-Carbon.png'; 
import Gluten from '../images/Preferences-Logo/Gluten.png'; 
import Soy from '../images/Preferences-Logo/Soy.png'; 
import Dairy from '../images/Preferences-Logo/Dairy.png'; 
import Shellfish from '../images/Preferences-Logo/Crustacean-Shellfish.png'; 
import Eggs from '../images/Preferences-Logo/Eggs.png'; 
import Halal from '../images/Preferences-Logo/Halal.png'; 
import notWatchedImg from '../images/CheckBox/not-watched.png'; 
import watchedImg from '../images/CheckBox/watched.png'; 

import './Preference.css';

function Preference(props) {

    const [ watched, setWatched ] = useState(false); 

    const changeWatchedState = () => {
        setWatched(!watched) 
    }

    return (
        <div className = "preferenceItem">
            <div> 
                <img id = "watched" src= {watched ? watchedImg : notWatchedImg} width = '50px' onClick={changeWatchedState}/> 
            </div>
            <div>
                <img src = {props.nutritionLogo} width = '50px' /> 
            </div>
            <div>
                <h3> {props.nutritionName} </h3>
            </div>
        </div>  
    );
}

function PreferenceList() {

    const preferences = 
    [
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Vegetarian,
            nutritionName: "Vegetarian"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Vegan,
            nutritionName: "Vegan"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Peanuts,
            nutritionName: "Contains Peanuts"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: TreeNuts,
            nutritionName: "Contains Tree Nuts"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Wheat,
            nutritionName: "Contains Wheat"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Fish,
            nutritionName: "Contains Fish"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: LowCarbon,
            nutritionName: "Low Carbon Footprint"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Gluten,
            nutritionName: "Contains Gluten"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Soy,
            nutritionName: "Contains Soy"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Dairy,
            nutritionName: "Contains Dairy"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Shellfish,
            nutritionName: "Contains Crustacean Shellfish"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Eggs,
            nutritionName: "Contains Eggs"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: Halal,
            nutritionName: "Halal Menu Option"
        },
        {
            checkBox: {notWatchedImg},
            nutritionLogo: HighCarbon,
            nutritionName: "High Carbon Footprint"
        },
    
    ]; 

    const allPreferenceComponents = preferences.map((preferenceItem) => {
        return(
            <Preference
                checkBox={preferenceItem.checkBox}
                nutritionLogo={preferenceItem.nutritionLogo}
                nutritionName={preferenceItem.nutritionName} 
                key={preferenceItem.nutritionName}
            />
        );
    })
   return (
       <div className = "preferenceList">
           {allPreferenceComponents}
       </div>
   );
}

export default PreferenceList;