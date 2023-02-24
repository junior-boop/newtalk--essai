import { Link } from 'react-router-dom'
import { Button } from '../button/button'
import './faire_action.css'

export default function Faire_Action(){
    return(
        <div className="faire_action">
            <div className="container action">
                    <Button url='/temoignage'>
                        Laissez votre témoignage ici
                    </Button>
            </div>
        </div>
    )
}