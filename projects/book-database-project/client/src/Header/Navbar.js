import React from "react";
import { Link } from "react-router-dom";
// import Toolbar from "@material-ui/core/Toolbar"

import { withBookContext } from '../Helpers/BookData';

function NavBar() {
    return (
        <nav className="navbar">
          <Link className="link" to={"/"}>Home</Link>  
          <Link className="link" to={"/owned"}>My Books</Link>  
          <Link className="link" to={"/wishlist"}>Wishlist</Link>  
          <Link className="link" to={"/recommendations"}>Recommendations</Link>  
        </nav>
    )
}

export default withBookContext(NavBar);