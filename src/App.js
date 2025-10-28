import React from 'react';
import ChatContabil from './components/ChatContabil';
import AssistentePlanos from './components/AssistentePlanos';
import Planos from './components/Planos';
import Contato from './components/Contato';
import Termos from './components/Termos';

function App() {
  return (
    <div className="App">
      <h1>ContabilizaDigital Serviços Contábeis Ltda</h1>
      <p>Atendimento 100% online – Contadora responsável: Sandra Alves dos Santos Gomes – Campo Grande/MS</p>
      <Planos />
      <ChatContabil />
      <AssistentePlanos />
      <Contato />
      <Termos />
    </div>
  );
}

export default App;
