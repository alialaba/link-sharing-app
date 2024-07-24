export interface User {
    id: string;
    email: string;
    // Add other user properties as needed
  }
  
  export interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
  }