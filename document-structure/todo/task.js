let button = document.querySelector('.tasks__add');
let text = document.querySelector('.tasks__input');
let tasksList = document.querySelector('.tasks__list');

// на кнопку "Добавить"
button.addEventListener('click', () => {
    event.preventDefault();
    if(text.value.trim()){
        createTask();
        text.value ='';
    }
    deleteTask();  
})

//добавление таски
function createTask(){
   
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">${text.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `)
}

//удаление таски
function deleteTask(){
    document.querySelectorAll('.task').forEach((i) => {
        let task = i;
        task.lastElementChild.addEventListener('click', () => {
            task.remove();
        })
    })
}
