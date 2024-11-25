import React, { useEffect, useState } from 'react';
import './index.css'; // Asegúrate de enlazar el archivo de estilos

function IncrementAnimation({ value }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => setShow(false), 1000); // Desaparece después de 1 segundo

    return () => clearTimeout(timeout);
  }, [value]); // La animación se activa cada vez que cambia el valor

  return (
    <div className={`increment ${show ? 'visible' : ''}`}>
      +{value}
    </div>
  );
}

export default IncrementAnimation;
