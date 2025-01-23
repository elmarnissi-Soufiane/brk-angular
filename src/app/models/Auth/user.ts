export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;  // password may not be needed for the frontend
}