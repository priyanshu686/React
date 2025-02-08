import React from "react";
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


const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(jsxusing);

root1.render(<Heading/>);