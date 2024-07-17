import { createContext } from "react";
import { IUser } from '@/types/user';

interface UserListContextData {
  users: IUser[];
  isLoading: boolean
}

export const UserListContext = createContext<UserListContextData>(
  {} as UserListContextData
);