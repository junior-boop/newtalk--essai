import React, {useState} from "react";
import { Button } from "../button/button";
import './others.css'

  

  export default  function Others(){
    return(
        <div className='others'>
            
                <div className="container others-content">

                    <div className="others-message">
                    <h2>Devenez Parrain ou Marraine</h2> 
                    <div className="others-btns">
                        <Button 
                            className = 'btns' 
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                           ENREGISTRER
                        </Button>
                    </div>
                    </div>
            

            
                    <div className="others-message">
                    <h2>Devenez Partenaire</h2> 
                    <div className="others-btns">
                        <Button 
                            className = 'btns' 
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            ENREGISTRER
                        </Button>
                    </div>
                    </div>
                </div> 
            </div>
    )
  }