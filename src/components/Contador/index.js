import React, { useState, useEffect } from 'react';
import IncrementAnimation from '../IncrementAnimation/index';

const INITIAL_COUNT = 100000;

function Contador() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [incrementTrigger, setIncrementTrigger] = useState(0); // Nuevo estado para activar la animación
  const incrementValue = 10; // El valor que se muestra en la animación
  

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        setIncrementTrigger((prev) => prev + 1); // Actualiza para activar la animación
        return prevCount + incrementValue;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App-header">
      <h1>Contador</h1>
      <p>{count}</p>
      <IncrementAnimation key={incrementTrigger} value={incrementValue} /> {/* Pasa el trigger como key */}
    </div>
  );
}

export default Contador;
