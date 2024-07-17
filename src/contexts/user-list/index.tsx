import { UserListProvider } from "./user-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return <UserListProvider>{children}</UserListProvider>;
}