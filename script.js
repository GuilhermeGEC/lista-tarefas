const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  // Criar o item da lista
  const li = document.createElement('li');
  li.textContent = taskText;

  // Criar botão remover
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.classList.add('remove-btn');

  // Remover a tarefa ao clicar no botão
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Adicionar botão no item da lista
  li.appendChild(removeBtn);

  // Adicionar item na lista
  taskList.appendChild(li);

  // Limpar o input
  taskInput.value = '';
  taskInput.focus();
});

// Também permitir adicionar tarefa ao apertar Enter
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
