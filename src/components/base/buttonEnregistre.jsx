import React from "react";
import Button from "./button";


export default function ButtonEnregistre({texte,onClick, ref}){


    return(
        <Button ref = {ref} texte={texte} onClick = {onClick}/>
    )
}