
    function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      if (taskText !== '') {
        const ul = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;
        ul.appendChild(li);
        input.value = '';
        input.focus();
      }
    }