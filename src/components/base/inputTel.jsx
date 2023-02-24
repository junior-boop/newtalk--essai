import React from "react";
import Input from "./input";

export default function InputTel({titre}){

    return(
        <div>
            <Input type ={'tel'} titre = {titre} />
        </div>
    )
}