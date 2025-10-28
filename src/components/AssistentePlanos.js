import React, { useState } from 'react';

function AssistentePlanos() {
  const [resposta, setResposta] = useState('');

  const escolherPlano = (plano) => {
    setResposta(`Baseado nas suas informações, o plano ideal é: ${plano}`);
  };

  return (
    <div>
      <h2>Assistente de Planos</h2>
      <button onClick={() => escolherPlano('Plano Básico - R$199')}>Básico</button>
      <button onClick={() => escolherPlano('Plano Intermediário - R$349')}>Intermediário</button>
      <button onClick={() => escolherPlano('Plano Avançado - R$699')}>Avançado</button>
      {resposta && <p>{resposta}</p>}
    </div>
  );
}

export default AssistentePlanos;
