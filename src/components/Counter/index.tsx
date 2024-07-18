import { useState, useEffect } from 'react';

type CounterProps = {
  initialCount: number;
  onCountUpdate: (count: number) => void;
};

export const Counter: React.FC<CounterProps> = ({ initialCount, onCountUpdate }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const mountEvent = new CustomEvent('onCounterMount');
    window.dispatchEvent(mountEvent);

    console.log('Componente montado!');
    return () => {
      const unmountEvent = new CustomEvent('onCounterUnmount');
      window.dispatchEvent(unmountEvent);

      console.log('Componente desmontado!');
    };
  }, []);

  useEffect(() => {
    if (count === 10) {
      onCountUpdate(count);
      return;
    }

    const updateEvent = new CustomEvent('onCounterUpdate', { detail: count });
    window.dispatchEvent(updateEvent);
    onCountUpdate(count);

    console.log('Componente atualizado!');
  }, [count, onCountUpdate]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  if (count === 10) {
    return null; // Desmontar o componente quando count é 10
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};