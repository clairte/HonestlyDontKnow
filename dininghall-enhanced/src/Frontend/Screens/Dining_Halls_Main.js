import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Dining_Halls_Main()
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
        </div>
    ); 
}

export default Dining_Halls_Main; 