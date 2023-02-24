import React from "react";
import './comItems.css'


export default function ComItems({image,title,message}){


    return(
        <div className="comitems">

            <div className="container comitems-content">
                <div className="comitems-message">
                    <div className="image">

                    </div>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="texte">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>


    )

}