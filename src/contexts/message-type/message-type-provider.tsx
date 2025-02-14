import { IToastMessage } from "@/types/toast-message";
import { useState, ReactNode } from "react";
import { MessageContext } from "./message-type-context";

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addMessage = (message: IToastMessage, duration: number = 3000) => {
    setMessages((prevMessages) => [...prevMessages, message]);

    setTimeout(() => {
      removeMessage(message.id);
    }, duration);
  };

  const removeMessage = (id: string) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
