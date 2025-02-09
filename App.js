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
    return (
        <div className="res-card">
            <img className="res-img" alt="Restaurant-Image"  src={resobj.info.image.url}/>
            <div className="res-name">
                <h3>{resobj.info.name}</h3>
                <p className="star-rate"> {resobj.info.ratingNew.ratings.DELIVERY.ratingV2} Stars</p>
            </div>
            <div className="cuisine">
                {/* <p>{resobj.info.cuisine.map(cuisineItem => cuisineItem.name).join(', ')}</p> */}
                <p>{resobj.info.cuisine[0].name},{resobj.info.cuisine[1].name}</p>
                <p>{resobj.info.costText.text}</p>
            </div>
            <div className="address">
                <p>{resobj.info.locality.name}</p>
                <p>{resobj.distance}</p>
            </div>
        </div>
    )
}


const Body = () =>{
    return (
        <div className="Body">
        <div className="search-bar">Search</div>
        <div className="res-container">
            <ResCard resobj = {data[0]}/>
            <ResCard resobj = {data[1]}/>
            <ResCard resobj = {data[2]}/>
            <ResCard resobj = {data[3]}/>
            <ResCard resobj = {data[4]}/>
            <ResCard resobj = {data[5]}/>
            <ResCard resobj = {data[6]}/>
            <ResCard resobj = {data[7]}/>
            <ResCard resobj = {data[8]}/>
            <ResCard resobj = {data[9]}/>
            <ResCard resobj = {data[10]}/>
            <ResCard resobj = {data[11]}/>
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