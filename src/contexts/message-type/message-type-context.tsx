import { createContext } from "react";
import { IToastMessage } from "@/types/toast-message";

interface MessageContextType {
  messages: IToastMessage[];
  addMessage: (message: IToastMessage, duration?: number) => void;
  removeMessage: (id: string) => void;
}

export const MessageContext = createContext<MessageContextType | undefined>(
  undefined
);
