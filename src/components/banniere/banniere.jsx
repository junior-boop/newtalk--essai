import './banniere.css'


export default function Banniere({ children, className = '', style }){
    return(
        <div className={`banniere`} style={style}>
            <div className={`container ${className}`}>
                {children}
            </div>
        </div>
    )
}