# React
 
All Basic Concepts of React 


# Parcel(Bundler)( For reading Documnetation of parcel go on :- https://parceljs.org/) :-
 - Dev Build
 - Create a Local Server
 - Refersh Webpage immediately as we make change in code and save that change / HMR - Hot Module Replacement.
 - HMR is done by using File Watching Algorithm - written in C++
 - Caching :- Faster Builds
 - Image Optimization
 - Minification
 - Bundling
 - Compress
 - Consistence Hashing
 - Code Splitting
 - Differential Bundling - Support older browsers
 - Diagnostics
 - Error Handling
 - HTTPs
 - Tree Shaking - remove unused code
 - Different dev and prod bundle

 # JSX (JavaScript XML):- 
  - JSX is a Camel Case (camelCase is the naming convention for attributes and event handlers, as opposed to  kebab-case (which is common in regular HTML))
  - JSX (Transpiled before reaches the JS) => (Transpiled is done by the parcel library known as Babel)
  - JSX => Babel Transpiles to React.createElement => ReactElement - JS Object => HTML Element (render)


# React Element 
 - A React element is an object that describes a UI element and is created using JSX or React.createElement().
 - React elements are immutable, meaning once they are created, they cannot be changed.
 - It's the building block of React applications and describes what should appear on the screen.


# React Component
 - A React component is a function or class that returns React elements (or other components).
 - Components can be written as function components or class components.
     - Function components are simpler and use hooks for state and lifecycle management.
     - Class components are more verbose and use traditional lifecycle methods.
 - Props are used for passing data from parent to child components, while state is used to manage the internal data of a component.


# Routing
  - Client-Side Routing
  - Server-Side Routing


# Redux Toolkit 
  - Install The package @reduxjs/toolkit and react-redux
  - Create a React Storage Component using CreateStore Feature from react toolkit
  - Then Provide that Store to the root or where u want to use that data and this Provide feature comes from the react-redux library
  - Now Create the Slice Components and export the action and reducer from that slice
  - Then import the reducers in the store and give that reducer data to the store 
  - Then use that store data by calling the selecter hook from the react-redux library 