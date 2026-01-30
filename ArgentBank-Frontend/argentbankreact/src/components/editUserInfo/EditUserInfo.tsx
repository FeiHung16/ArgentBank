import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectError, selectLoading, selectUserProfile } from '../../redux/feature/authSelector';
import { updateUserProfile } from '../../redux/feature/authActions';
import { cancelProfileEdit } from '../../redux/feature/authSlices';
import './EditUserInfo.scss';




export const EditUserInfo: React.FC = () => {

    const dispatch = useAppDispatch(); // Placeholder for dispatch function

    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const user = useSelector(selectUserProfile);


    // Variables d'état locales pour les données de l'utilisateur
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //Effct pour mettre à jours les champs lorsque les données utilisateur changent
    useEffect(() => {
        if (user) {
            setUserName(user.userName || '');
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
        }
    }, [user]);

    // We handle the save action to update the userName
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // We dispatch the action to update userName
            // unwrap() is used to directly get the result of the action (success or failure)
            await ((dispatch as any)(updateUserProfile(userName))).unwrap();
            console.log("UserName updated successfully");
        } catch (error) {
            console.error("Error while updating user profile:", error);
        }
    };

    // We handle the cancel action to exit edit mode
    const handleCancel = () => {
        dispatch(cancelProfileEdit());
    };

    // We display loading and error messages if necessary
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error}</p>;

return (
    <form className="edit-user-info " onSubmit={handleSave}>
      <h1>Edit user info</h1>
      <div className="form-element">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value={firstName} disabled />
      </div>
      <div className="form-element">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value={lastName} disabled />
      </div>
      <div className="button-container">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}