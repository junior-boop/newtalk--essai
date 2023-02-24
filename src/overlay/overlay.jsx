import { createPortal } from "react-dom";
import './overlay.css'

export default function Overlay({children}){
    return createPortal(
        <div className="overlay">
            {children}
        </div>, document.getElementById('soutient')
    )
}
export function Overlay_Tegmoignage({children}){
    return createPortal(
        <div className="overlay">
            {children}
        </div>, document.getElementById('temoignage')
    )
}



