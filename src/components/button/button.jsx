import React from "react";
import './button.css'
import { Link } from "react-router-dom";

const STYLES = ['btn--primary','btn--outline'] 

const SIZES = ['btn--medium','btn--large']
 

export const Button = ({children, type,  buttonStyle, buttonSize, url = '/', style})=>{

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to={url} className="btn-mobile">
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onclick} 
                type={type}
                style={style}
            >

                {children}
            </button>
        </Link>
     )
}