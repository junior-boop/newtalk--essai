import React from "react";
import HeroSection from "../herosection/heroSection";
import Counter from "../counter/counterUp";
import Citation from "../citation/citation";
import Temoignage from "../temoignage/temoin";
import Partenaire from "../partenaire/patenaire";
import Faire_Action from "../faire_action/faire_action";
import { Button } from "../button/button";


export default function Home(){

    return(
        <div>
            <HeroSection>
            <div className="titre">
            BRISONS <br/>LE SILENCE
            </div>
            <h2>Parlons, dénonçons sans crainte, toutes les violences</h2> 
            <div className="hero-btns">
                <Button 
                    className = 'btn'
                    url= '/temoignage'
                    >
                    Témoigner ici
                </Button>
            </div>
            </HeroSection>
            <Counter/>
            <Citation/>
            <Temoignage/>
            <Partenaire/>
            <Faire_Action />
        </div>
    )
}


