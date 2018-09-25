// Import the React and ReactDOM API
import React from 'react';
import { render } from 'react-dom';

// Import our components
import App from './App';

// Render them using the ReactDOM API
render(
    <App /> //For components, *ALWAYS* use a self closing tag
    ,
    document.getElementById("root") //Place to render it to
);