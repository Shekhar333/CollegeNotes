export interface User {
  name: string;
  email: string;
  id: string;
  profileUrl?: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error?: string | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string, name: string) => void;
}
