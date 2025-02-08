import React, { Component } from "react";
import ReactDOM from 'react-dom/client'

//  Using JSX
//  JSX (Transpiled before reaches the JS) => (Transpiled is done by the parcel library known as Babel)
// React Element
const jsxusing = <div id="container">
                    <h1> This is First Code Using JSX in React Element</h1>
                    <p>Hello Everyone</p>
                </div>;

console.log(jsxusing);


// React Component

const Heading =()=>{
    return (
        <div id="container">
                    <h1> This is First Code Using JSX in React Component</h1>
                    <p>Hello Everyone</p>
                </div>
    );
}


// Component Compostion

const Header = ()=>{
    return (
    <div>
        <h1>Welcome to my Website</h1>
    </div>
    )
}

const Footer = () => {
    return(
        <div>
            <h5>This is the footer of my Website </h5>
        </div>
    )
}

const Body = () => {
    return (
        <div>
        <Header></Header>
        <Header/>
        <div>
            <p>This is the center Body of my Website</p>
        </div>
        <Footer/>
        {Footer()}
        </div>
    );
}

// Three Ways to call Functional Components to another Functional Component
// 1.) <name of Component></name of Component>
// 2.) <name of Component/>
// 3.) {name of Component()}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(jsxusing);   // Rendering for React Element

// root1.render(<Heading/>);  // Rendering for React Functional Component

root1.render(<Body></Body>);  // Rendering for Component Composition