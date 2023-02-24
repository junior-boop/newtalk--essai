import React from "react";
import Input from "./input";

export default function InputMail({titre,name,placeholder,value}){

    return(
        <div>
            <Input type ={'email'} titre = {titre} />
        </div>
    )
}