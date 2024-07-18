import { useCallback, useEffect, useState } from "react";
import { IUser } from "@/types/user";
import { sleep } from "@/utils/sleep";
import { UserListContext } from "./user-context";

type UserListProviderProps = {
  children: React.ReactNode;
};

export function UserListProvider(props: UserListProviderProps) {
  const { children } = props;
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsersList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/users');
			const data = await response.json();

			if (!response.ok) throw new Error('Erro ao obter os dados');
			
			await sleep()

			setUsers(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsersList();
  }, [loadUsersList]);

  return (
    <UserListContext.Provider
      value={{
        isLoading,
        users
      }}
    >
      {children}
    </UserListContext.Provider>
  );
}