import React from "react";
import ComItems from "../comItems/comItems";


export default function Article({image, title,message}){


    return(
        

        <ComItems image = {image} title = {title} message = {message}/>
    
    )
}