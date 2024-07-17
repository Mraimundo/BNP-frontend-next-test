/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { GetStaticProps } from 'next';
import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

interface ListaProps {
	list: Array<ICity>;
}

export default function Lista({ list }: ListaProps) {
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>
				<div data-list-container>
					{list?.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch('http://localhost:8080/api/cities/10'); // Atualize a URL conforme necessário
		const data: Array<ICity> = await response.json();

		if (!response.ok) throw new Error('Erro ao obter os dados');

		return {
			props: {
				list: data,
			},
			revalidate: 60, // Atualiza a cada 1 minuto
		};
	} catch (error) {
		console.error(error);

		return {
			props: {
				list: [
					{
						id: new Date().getTime().toString(),
						name: 'Erro ao carregar',
					},
				],
			},
			revalidate: 60, // Tenta novamente a cada 1 minuto
		};
	}
};
