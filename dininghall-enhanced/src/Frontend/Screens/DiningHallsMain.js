import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function DiningHallsMain()
{
    const navigate = useNavigate(); 
    return(
        <div>
            <p> Hello This is Main </p>
            <button
                onClick = {()=> {
                    navigate("/preferences"); 
                }}
            > Go to Preferences </button>
            <div>
            <p> Hello This is Main </p>
            <button
                onClick = {()=> {
                    navigate("/signin"); 
                }}
            > Go to Sign In </button>
        </div>
        </div>
    ); 
}

export default DiningHallsMain; 