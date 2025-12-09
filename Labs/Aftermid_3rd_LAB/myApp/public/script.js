
    // function addTask() {
    //   const input = document.getElementById('taskInput');
    //   const taskText = input.value.trim();
    //   if (taskText !== '') {
    //     const ul = document.getElementById('taskList');
    //     const li = document.createElement('li');
    //     li.textContent = taskText;
    //     ul.appendChild(li);
    //     input.value = '';
    //     input.focus();
    //   }
    // }


    let text_input = document.querySelector('#taskInput');
    let btn_1 = document.querySelector('#btn1');
    let task = document.querySelector('#taskList');

    btn_1.addEventListener('click', ()=> {
        
        const txt = text_input.value.trim();
        if(txt === '') return;

        const li = document.createElement('li');
        li.textContent = txt;

        const del = document.createElement('button')
        del.textContent = 'delete';
        del.addEventListener('click', ()=>{
            li.remove();
        })

        li.append(del)
        task.append(li);


        text_input.value = '';
    })