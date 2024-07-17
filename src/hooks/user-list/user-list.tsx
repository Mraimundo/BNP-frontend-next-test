import { useContext } from "react";
import { UserListContext } from "../../contexts/user-list/user-context";

export function useUserList() {
  const context = useContext(UserListContext);
  return context;
}