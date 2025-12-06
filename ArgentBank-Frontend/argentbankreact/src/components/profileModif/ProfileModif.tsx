import React from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { startProfileEdit } from '../../redux/feature/authSlices';

interface ProfileModifProps {
    firstName: string;
    userName: string;
}


 export const ProfileModif:React.FC<ProfileModifProps> = ({firstName, userName}) => {
    const dispatch: AppDispatch = useDispatch();

    const handleEditClick = () => {
      dispatch(startProfileEdit());
    };

    return (
        <section>
            <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${userName} `}
          {/* Afficher le nom complet de l'utilisateur */}
        </h1>
        <button className="edit-button" onClick ={handleEditClick}> 
          Edit Name
        </button>
      </div>
        </section>
    ) 

    
    }