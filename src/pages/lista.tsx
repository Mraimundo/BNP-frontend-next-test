/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import Head from 'next/head';
import { useUserList } from '@/hooks/user-list';
import { SpinnerCircle } from '@/components/SpinnerCircle';
import styles from '@/styles/lista.module.css';

export default function Lista() {
	const { users, isLoading } = useUserList();

	if (isLoading) {
    return <SpinnerCircle/>;
  }

	return (
    <>
      <Head>
				<title>Lista de Usuários</title>
			</Head>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Lista de usuários</h2>

          <table className={styles.tableContainer}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome </th>
                <th>E-mail</th>

              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
	);
}
