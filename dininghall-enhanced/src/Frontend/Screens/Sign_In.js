import React from 'react';
import MenuLogo from '../../images/SignIn/MenuLogo.jpg';

function Sign_In() {
    return (
        <div classname = "main">
            <div classname = "sub-main">
                <div>
                    <div classname = "imgs">
                        <div classname = "container-image">
                            <img src = {MenuLogo} alt = "MenuLogo" classname = "MenuLogo" width='316px' height='273px' left='562px' top='62px'/>
                        </div>
                    </div>
                    <div>
                        <div classname = "title">
                            <a>UCLA Dining Hall Menu</a>
                        </div>
                        <div>
                            <input type = "text" placeholder = "Email" classname = "name"/>
                        </div>
                        <div>
                            <input type = "text" placeholder = "Password" classname = "name"/>
                        </div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
        
    );

}

export default Sign_In; 
