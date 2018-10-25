import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
          <Link to={"/"}>Home</Link>  
          <Link to={"/my-books"}>My Books</Link>  
          <Link to={"/wishlist"}>Wishlist</Link>  
          <Link to={"/recommendations"}>Recommendations</Link>  
        </nav>
    )
}

export default NavBar;