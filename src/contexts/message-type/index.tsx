import { MessageProvider } from "./message-type-provider";

type ToasterProviderProps = {
  children: React.ReactNode;
};

export function ToasterProvider(props: ToasterProviderProps) {
  const { children } = props;

  return <MessageProvider>{children}</MessageProvider>;
}