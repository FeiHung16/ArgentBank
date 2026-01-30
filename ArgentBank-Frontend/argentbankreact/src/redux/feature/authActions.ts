import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type AuthState } from "../feature/authType"; // Typage importé depuis authSlice

const API_BASE_URL = "http://localhost:3001/api/v1";

export const loginUser = createAsyncThunk( 
  "auth/login",
  async (
    credentials: { email: string; password: string; rememberMe: boolean }, // Donnée envoyé à l'API lors du login
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(  // Requête API
        `${API_BASE_URL}/user/login`,
        credentials
      );
      if (response.data.message !== "User successfully logged in") {
        return rejectWithValue("La connexion n'as pas réussi, erreur API");
      }
      const token = response.data.body.token; //Récup Token si succès
      return token;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        "La connexion a échoué. Veuillez vérifier vos identifiants."
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk( // Récup du profil
  "auth/fetchUserProfile",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    if (!token) { // Vérif token
      return rejectWithValue("Le token est vide");
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` }, //Appel API avec token
      });
      if (response.data.message !== "Successfully got user profile data") {
        return rejectWithValue("La connexion n'as pas réussi, erreur API");
      }
      return response.data.body; // Mise à jour du state avec les données du profil
    } catch (error) {
      console.error(error);
      return rejectWithValue("Échec de la récupération du profil utilisateur.");
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (userName: string, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    try {
      const response = await axios.put(
        `${API_BASE_URL}/user/profile`,
        { userName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.message !== "Successfully updated user profile data") {
        return rejectWithValue("La connexion n'as pas réussi, erreur API");
      }
      return response.data.body;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Échec de la mise à jour du profil utilisateur.");
    }
  }
);