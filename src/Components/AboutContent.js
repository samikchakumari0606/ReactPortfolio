

import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import React from 'react';
import React1 from "../assests/code.jpg";
import React2 from "../assests/react.jpg";


const AboutContent = () => {
  return <div className="about">

    <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a react front-end developer. I create responsive
            source websites for my clients.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div> 


    <div className="right">
        <div class="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>

            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
    </div>
  </div>;
  

}

export default AboutContent;
