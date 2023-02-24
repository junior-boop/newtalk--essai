import React from "react";
import './citation.css'

export default function Citation(){


    return(
        <div className="citation">
            <div className="container citation-content">

                <div className="citation-message">
                    <h2 style={{fontFamily :"Britannic"}}>Notre Constat</h2>
                    <div className="cite">
                        <p style={{fontStyle: 'italic', marginBottom : 0, paddingBottom : 0  }}>
                            Il y a toujours de la violence dans la pensée qu{"'"}on a d{"'"}être supérieur aux autres.
                            Il y a toujours de la violence lorsque l{"'"}on s{"'"}octroie des droits sur les plus faibles
                        </p>
                        <div style={{fontSize : 16, fontWeight : '600', marginTop : 24}}>-- Guillaume Prevel --</div>
                    </div>
                    <div className="cite">
                        <p style={{fontStyle: 'italic', marginBottom : 0, paddingBottom : 0  }}>
                            De très nombreuses femmes qui subissent des violences physiques et sexuelles dans leur couple
                            ne s{"'"}en libèrent pas et n{"'"}en parle pas ouvertement. Le lien avec le partenaire violent
                            subsiste en depit des services souvent majeurs.
                        </p>
                        <div style={{fontSize : 16, fontWeight : '600', marginTop : 24}}>-- Marie-José Grihom --</div>
                    </div>
                </div>

            </div>
        </div>
    )
}