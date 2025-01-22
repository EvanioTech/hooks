import React, { useState} from 'react';


function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React',
    'Acessar o portal do aluno']);

    const [nome, setNome] = useState('Matias');

    const [input, setInput] = useState('');

 function handleAdd  ()  {
  if(input === ''){
    alert('Você precisa digitar uma tarefa');
    return;
  }else{
  setTarefas([...tarefas, input]);
  setInput('');
  }
}



  return (
    <div >
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>

      <button type='button' onClick={handleAdd}>Adicionar</button>
      
    </div>
  );
}

export default App;
