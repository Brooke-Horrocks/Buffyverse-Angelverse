import React from "react";

import ReactLoading from "react-loading";

function Loading() {
    return (
        <div style={{height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ReactLoading type="bubbles" color="#F8DE4B" height="25%" width="25%"/>
        </div>
    )
}

export default Loading;