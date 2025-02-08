import React from "react";
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', {}, "This is First Code in React");
        
const div1 = React.createElement('div', { id: 'container' }, heading , "Hello Everyone");

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(div1);