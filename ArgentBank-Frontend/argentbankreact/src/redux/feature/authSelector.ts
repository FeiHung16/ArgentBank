import type { RootState } from "../store";




export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated; // Selector to check if user is authenticated
export const selectUserProfile = (state: RootState) => state.auth.user; // Selector to get user profile information
export const selectError = (state: RootState) => state.auth.error; // Selector to get authentication error messages
export const selectLoading = (state: RootState) => state.auth.loading; // Selector to get loading state for authentication
export const selectIsEditingProfile = (state: RootState) => state.auth.isEditingProfile; // Selector to check if user is in profile editing mode