import React from "react";

const Gallery=(props)=>{
    return(
        <div>
            <h3>This is {props.page} page</h3>
            <img src="day9FNTask\src\logo.png" alt="SECE Logo"></img>
            <h3>The image is {props.image}</h3>
        </div>
    );
};
export default Gallery;