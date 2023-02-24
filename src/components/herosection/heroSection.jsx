  import React, {useState} from "react";
import { Button } from "../button/button";
import './heroSection.css'
import { useLocation } from "react-router-dom";

  

  export default  function HeroSection({image = 'images_3.png', children}){

    const location = useLocation()

    return(
        <div className='hero'>
                <div className="container hero-content">
                    <div className="hero_image">
                      <div>
                        <img src={`/images/${image}`} alt="" height={"100%"} />
                      </div>
                    </div>
                    <div className="hero-message">
                      {children}
                    </div>
                </div> 
            </div>
    )
  }