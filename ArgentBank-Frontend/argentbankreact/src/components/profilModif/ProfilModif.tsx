import React from 'react';

interface ProfilModifProps {
    firstName: string;
    userName: string;
}


 export const ProfilModif:React.FC<ProfilModifProps> = ({firstName, userName}) => {
    return (
        <section>
            <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${userName} `}
          {/* Afficher le nom complet de l'utilisateur */}
        </h1>
        <button className="edit-button">
          Edit Name
        </button>
      </div>
        </section>
    ) 

    
    }