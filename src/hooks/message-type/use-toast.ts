import { useMessageContext } from '@/hooks/message-type';
import { v4 as uuidv4 } from 'uuid';
import { IToastMessage } from '@/types/toast-message';

export const useToast = () => {
  const { addMessage } = useMessageContext();

  const showToast = (message: string, type: 'success' | 'error') => {
    const id = uuidv4();
    const toastMessage: IToastMessage = { id, message, type };
    addMessage(toastMessage);
  };

  return { showToast };
};