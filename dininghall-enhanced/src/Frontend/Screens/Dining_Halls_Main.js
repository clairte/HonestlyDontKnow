import React from 'react';

function Dining_Halls_Main()
{
    return(
        <div id="varied-width">
            <div class= "pg-sp2 prompt gate">
                <div class= "date">
                     <button class="dropbtn">Today 00/00/2022 </button>
                     <div class= "dropdown-content0">
                     </div>
                </div>
                <div class= "dropdown">
                    <button class= "dropbtn1"></button>
                    <button class= "dropbtn2"></button>
                    <button class= "dropbtn3"></button>
                    <div class= "dropdown-content">
                    </div>
                </div>
                <div class="pg-3-buttons">
                    <div>
                    <button class= "prompt-gate-button1" onclick="PromptGate_sp2(4)">Dining Hall</button>
                    <button class= "prompt-gate-button2" onclick= "PromptGate_sp2(3)">Take out</button>
                    <button class= "prompt-gate-button3" onclick= "PromptGate_sp2(2)">Food Truck</button>
                    <button class= "prompt-gate-button4" onclick="PromptGate_sp2(1)">Back</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dining_Halls_Main; 