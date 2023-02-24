import React from "react";


export default function Button({texte,onClick, ref}){

    return(
        <div>
            <button ref={ref} onClick={onClick}>{texte}</button>
        </div>
    )
}