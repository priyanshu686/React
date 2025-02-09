import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import logo from './Image/Logo.png';
import {data} from './LiveData.js';

const Header = () =>{
    return (
        <div className="header">
            <div >
                <img className="logo" src={logo} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li id="n1">Home</li>
                    <li id="n2">About Us</li>
                    <li id="n3">Contect Us</li>
                    <li id="n4">Cart</li>
                </ul>
            </div>
        </div>
    );
}

const ResCard = (props) =>{
    const {resobj} = props;
    const {image,name,cuisine,costText,locality} = resobj?.info;
    const{ratingV2} = resobj?.info?.ratingNew?.ratings?.DELIVERY;
    const {distance} = resobj;
    return (
        <div className="res-card">
            <img className="res-img" alt="Restaurant-Image"  src={image.url}/>
            <div className="res-name">
                <h3>{name}</h3>
                <p className="star-rate"> {ratingV2} Stars</p>
            </div>
            <div className="cuisine">
                {/* <p>{resobj.info.cuisine.map(cuisineItem => cuisineItem.name).join(', ')}</p> */}
                <p>{cuisine[0].name},{cuisine[1].name}</p>
                <p>{costText.text}</p>
            </div>
            <div className="address">
                <p>{locality.name}</p>
                <p>{distance}</p>
            </div>
        </div>
    )
}


const Body = () =>{
    return (
        <div className="distanceBody">
        <div className="search-bar">Search</div>
        <div className="res-container">
            {
                data.map(restaurent => <ResCard resobj={restaurent} />)
            }
        </div>
        </div>
    );
}
const AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Body></Body>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);