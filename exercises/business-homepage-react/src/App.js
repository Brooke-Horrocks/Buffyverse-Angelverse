import React from 'react';
import Navbar from './Navbar';
import Info from './Info';
import List from './List';
import Footer from './Footer';
import Images from './Images';

function App(){
    return(
        <div>
            <Navbar />
            <Images />
            <Info />
            <List />
            <Footer />
        </div>
        
    )
};

export default App;