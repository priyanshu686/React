const heading = React.createElement('h1', {}, "This is First Code in React");
        
const div1 = React.createElement('div', { id: 'container' }, heading , "Hello Everyone");

const root1 = ReactDOM.createRoot(document.body);
root1.render(div1);