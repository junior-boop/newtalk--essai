import React from "react"
import './counterUp.css'
import { Link } from "react-router-dom"
import Faire_Action from "../faire_action/faire_action"


export default function CounterUp(){
    
    return(

        <div className="counter">
            <div className="counter_container counter-content">
                <Counter_Item chiffre={'58%'} unite={'de 47 000 femmes et filles'} desc = {'Tuées par leur partenaire ou conjoint present ou passé'}/>
                <Counter_Item chiffre={640} unite={'millions de femme'} desc = {'Confrontées à la violence perpétrée par le partenaire intime'}/>
                <Counter_Item chiffre={'-40%'} unite={'de femmes'} desc = {'Qui subissent des violences demande de l\'aide sous une forme ou une autre'}/>

                <div className="infos">
                <Link className = 'voir_plus' to = {'/'}>
                    Pour plus d{"'"}information cliquez ici -&rarr;
                </Link>
            </div>
            </div>

            <Faire_Action />

        </div>
    )
}

function Counter_Item({chiffre, unite, desc}){
    return(
        <div className="counter-items">
            <div className="chiffre">
                <div className="haut">{chiffre}</div>
                <div className="bas">{unite}</div>
            </div>
            <div className="desc">
                {desc}
            </div>
        </div>
    )
}