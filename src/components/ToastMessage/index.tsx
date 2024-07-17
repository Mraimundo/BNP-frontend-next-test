import styles from './style.module.css';
import { IToastMessage } from '@/types/toast-message';
import { useMessageContext } from '@/hooks/message-type';

interface ToastMessageProps {
  content: IToastMessage;
}

export const ToastMessage = ({ content }: ToastMessageProps) => {
  const { removeMessage } = useMessageContext();

  const handleClose = () => {
    removeMessage(content.id);
  };

  return (
    <div className={styles.container} data-toast-type={content.type} data-toast-id={content.id}>
			<span data-content>{content.message}</span>

			<span onClick={handleClose} data-close>╳</span>
		</div>
  );
};