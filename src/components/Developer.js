import React, { useState } from "react";
import logo from "../images/pics.jpg";
import ReactRoundedImage from "react-rounded-image";
import './myStyle.css';
import moment from 'moment';
// import 'moment-timezone';
// import Moment from "react-moment";



const ImageStatus = (props) => {

    let skill = ['Django', 'JS', 'PostGres', 'React']
    let message
    let joindate="2021-12-01"

    if(props.status){
        message =  <div className="online">Online</div>
    }
    else{
        message =  <div className="offline">Offline</div>
    }
    
    let jdate = moment(joindate, "YYYYMMDD").fromNow();

    return(
        <div className="overlay">
            <div className="img-container">
                <img src={logo} />
                {/* <ReactRoundedImage image={logo} /> */}
                <div className="modalRight">
                    <div className="content">
                        <h2>{message}</h2><br/>
                        <h1>{props.name}</h1><br/>
                        <h2>{props.role}</h2><br/>
                        <h2>{String(skill)}</h2><br/>
                        <h1>{jdate}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageStatus;