let button = document.querySelector('.tasks__add');
let text = document.querySelector('.tasks__input');
let listTasks = document.querySelector('.tasks__list');

// на кнопку "Добавить"
button.addEventListener('click', () => {
    event.preventDefault();
    if(text.value){
        createTask();
        text.value ='';
    }
    
})

//добавление таски
function createTask(){
    let task = document.createElement('div');
    task.classList.add('task');

    let titleTask = document.createElement('div');
    titleTask.classList.add('task__title');
    titleTask.innerText = text.value;

    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('task__remove');
    a.innerHTML = '&times';
    a.addEventListener('click', ()=>{
        task.remove();
    })
    
    task.append(titleTask, a);
    listTasks.append(task);
}
