import { MessageContext } from '@/contexts/message-type/message-type-context';
import { useContext } from 'react';

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};