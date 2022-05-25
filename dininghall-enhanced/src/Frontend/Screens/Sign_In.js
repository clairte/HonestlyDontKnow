import React from 'react';
import MenuLogo from '../../images/SignIn/MenuLogo.jpg';
import { useNavigate, Link } from 'react-router-dom'; 
import './Sign_In.css'; 

function Sign_In() {
    const navigate = useNavigate();
    return (
        <div className = "main">
            <div className = "sub-main">
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
                            <input type = "text" placeholder = "Email" className = "name"/>
                        </div>
                        <div>
                            <input type = "text" placeholder = "Password" className = "name"/>
                        </div>
                        <button
                        onClick = {()=> {
                            navigate("/signin"); 
                        }}
                        >Login</button>
                        <Link to= "/preferences"> Log In </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );

}

export default Sign_In; 
