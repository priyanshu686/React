import React from "react";
import ReactDOM from 'react-dom/client'

// Using createElement  
const heading = React.createElement('h1', {}, "This is First Code in React");
        
const div1 = React.createElement('div', { id: 'container' },[ heading , "Hello Everyone"]);
console.log(div1);


//  Using JSX
//  JSX (Transpiled before reaches the JS) => (Transpiled is done by the parcel library known as Babel)
const jsxusing = <div id="container">
                    <h1> This is First Code Using JSX in React</h1>
                    <p>Hello Everyone</p>
                </div>;

console.log(jsxusing);
// Both the have the same output as Object because of Babel  


const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(jsxusing);