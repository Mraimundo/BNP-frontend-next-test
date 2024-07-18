/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

export default function ConfirmationModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleConfirm = () => {
        alert('Confirmado!');
        setModalIsOpen(false);
    };

		function renderModalContent() {
			return (
				<div data-modal-content className={styles['modal-content']}>
					<p>Tem certeza que deseja continuar com essa ação?</p>
				</div>
			);
		}

    return (
        <>
					<Head>
						<title>Modal de Confirmação</title>
					</Head>

					<main className={styles.container}>
						<button type="button" onClick={openModal}>
								Abrir modal de confirmação
						</button>
					</main>

					<Modal
							title="Confirmação"
							isOpen={modalIsOpen}
							onClose={closeModal}
							onConfirm={handleConfirm}
							footer={{ confirmText: 'Sim', cancelText: 'Não' }}
					>
							{renderModalContent()}
					</Modal>
        </>
    );
}
