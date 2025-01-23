import { User } from "../../../models/Auth/user";

export interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}