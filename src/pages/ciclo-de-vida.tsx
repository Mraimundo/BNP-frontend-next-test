/**
 * Ciclo de Vida
 *
 * - No evento de montagem deste component, deve ser registrados os seguintes events listeners:
 *  	- onCounterMount
 * 		- onCounterUnmount
 * 		- onCounterUpdate
 * - Os eventos devem ser disparados no componente Counter, seguindo o ciclo de vida do mesmo
 * - Ao atualizar o contador, deverá ser passado o valor atualizado no evento onCounterUpdate, e quando o valor
 * 		chegar a 10, o Counter deve ser desmontado.
 *
 * (Opcional)
 * - Ao observar os eventos, você verá que eles são disparados mais de uma vez, isso acontece porque o componente
 * 		Counter é desmontado e montado novamente, e os eventos são registrados novamente, isto é um problema comum
 * 		no nextjs, você deve resolver este problema.
 */

import { GetServerSideProps } from 'next/types';
import Head from 'next/head';
import { useEffect, useState, useCallback } from 'react';
import styles from '@/styles/ciclo-de-vida.module.css';
import { Counter } from '@/components/Counter';

type CicloDeVidaProps = {
  initialCount: number;
};

export default function CicloDeVida({ initialCount }: CicloDeVidaProps) {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleOcultCounterClick = useCallback(() => {
    setShowCounter((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleCounterMount = (event: CustomEventInit) => {
      console.log('onCounterMount', event.detail);
    };

    const handleCounterUnmount = (event: CustomEventInit) => {
      console.log('onCounterUnmount', event.detail);
    };

    const handleCounterUpdate = (event: CustomEventInit) => {
      console.log('onCounterUpdate', event.detail);
    };

    window.addEventListener('onCounterMount', handleCounterMount);
    window.addEventListener('onCounterUnmount', handleCounterUnmount);
    window.addEventListener('onCounterUpdate', handleCounterUpdate);

    return () => {
      window.removeEventListener('onCounterMount', handleCounterMount);
      window.removeEventListener('onCounterUnmount', handleCounterUnmount);
      window.removeEventListener('onCounterUpdate', handleCounterUpdate);
    };
  }, []);

  return (
    <>
      <Head>
				<title>Ciclo de vida de umm componente</title>
			</Head>

      <div className={styles.container}>
        <div>
          <button type="button" onClick={handleOcultCounterClick}>
            {showCounter ? 'Ocultar contador' : 'Mostrar contador'}
          </button>

          {showCounter && (
            <>
              <h1>Exemplo de Ciclo de vida</h1>

              <div data-content>
                <Counter initialCount={initialCount} onCountUpdate={setCount} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CicloDeVidaProps> = async () => {
  return {
    props: {
      initialCount: 0,
    },
  };
};