import { useEffect, useState } from 'react';
import logo from '../../Image/Logo.png';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [btnName,setbtnName] = useState("Login");
    // console.log("After useState");

    // useEffect(()=>{
    //     console.log("useEffect Rendered")
    // },[btnName]);

    // useEffect(()=>{
    //     console.log("useEffect Rendered")
    // },[]);


    // useEffect(()=>{
    //     console.log("useEffect Rendered")
    // });

    return (
        <div className="header">
            {/* {console.log("Entered in return Statement of Header")} */}
            <div >
                <img className="logo" src={logo} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li id="n1"><Link to ="/">Home</Link></li>
                    <li id="n2"><Link to ="/about">About Us</Link></li>
                    <li id="n3"><Link to="/contact">Contact Us</Link></li>
                    <li id="n4">Cart</li>
                    <button id="login"
                onClick={()=>{
                    btnName === "Login" ? setbtnName("Logout"):setbtnName("Login")
                }}
                >{btnName}</button>
                </ul>
                
            </div>
        </div>
    );
}

export default Header;