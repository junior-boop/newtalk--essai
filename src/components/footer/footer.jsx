import { useLocation } from 'react-router-dom'
import './footer.css'

export default function Footer(){
    const location = useLocation()
    return(
        <footer className={`${location.pathname === '/temoignage' || location.pathname === '/inscription' ? 'none' : null}`}>
            <div className="container">
                Tous droits reserver Talk.com &copy;2023
            </div>
        </footer>
    )
}