import React, { useState } from "react";
import logo from "../images/pics.jpg";
import ReactRoundedImage from "react-rounded-image";
import './myStyle.css';



const ImageStatus = () => {
    // return <ReactRoundedImage image={logo}/>

    let status = false
    let message
    if(status){
        message =  <div className="greendot">Online</div>
    }
    else{
        message =  <div className="reddot">Offline</div>
    }

    return(
        <div className="overlay">
            <div className="img-container">
                <img src={logo} />
                <h2>{message}</h2>
                {/* <h2>{status}</h2> */}
                {/* <ReactRoundedImage image={logo} /> */}
                <div className="modalRight">
                    <div className="content">
                        <h1>Akshay Sonejee</h1>
                        <h2>Software Engineer</h2>
                        <h2>Django, JS, PostGres, React</h2>
                        <h2>01-12-2021</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageStatus;