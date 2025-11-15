import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile, loginUser, updateUserProfile } from "./authActions";
import type { AuthState } from "./authType";



// Etat initial de l'authentification
const initialState: AuthState = {
    token: "",
    loading: false,
    isAuthenticated: false,
    isEditingProfile: false,
    error: "",
    user: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        id: "",
    },
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = "";
            state.isAuthenticated = false;
        },
        startProfileEdit: (state) => {
            state.isEditingProfile = true;
        },
        cancelProfileEdit: (state) => {
            state.isEditingProfile = false;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout, startProfileEdit, cancelProfileEdit } =
    authSlice.actions;
export default authSlice.reducer;