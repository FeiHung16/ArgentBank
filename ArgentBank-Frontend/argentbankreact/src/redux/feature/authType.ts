export interface UserProfile {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    id: string;
}


export interface AuthState {
    token: string;
    loading: boolean;
    isAuthenticated: boolean;
    isEditingProfile: boolean;
    error : string | null;
    user: UserProfile;
}