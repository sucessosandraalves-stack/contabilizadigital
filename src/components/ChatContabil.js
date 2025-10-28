import React, { useState } from 'react';

function ChatContabil() {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const enviarPergunta = () => {
    // Aqui a IA responderia automaticamente
    setResposta(`Resposta automática: ${mensagem}`);
    setMensagem('');
  };

  return (
    <div>
      <h2>Chat Contábil Inteligente</h2>
      <input 
        type="text" 
        value={mensagem} 
        onChange={(e) => setMensagem(e.target.value)} 
        placeholder="Digite sua pergunta..."
      />
      <button onClick={enviarPergunta}>Enviar</button>
      {resposta && <p>{resposta}</p>}
    </div>
  );
}

export default ChatContabil;
