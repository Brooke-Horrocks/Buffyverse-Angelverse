import React from "react";
import { Link } from "react-router-dom";
import { withBookContext } from '../Helpers/BookData';

function NavBar() {
    return (
        <nav className="navbar">
          <Link className="link" to={"/"}>Home</Link>  
          <Link className="link" to={"/owned"}>Owned</Link>  
          <Link className="link" to={"/wishlist"}>Wishlist</Link>  
          <Link className="link" to={"/recommendations"}>Recommendations</Link>  
          <Link className="link" to={"/add-a-book"}>Add</Link>  
        </nav>
    )
}

export default withBookContext(NavBar);