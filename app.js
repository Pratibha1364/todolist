// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Funtions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // ADD TODO TO LOCALS
    saveLocalTodos(todoInput.value);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);
    
    // Clear input value
    todoInput.value ='';
}
function deleteCheck(e) {
    const item = e.target;
    // Delete TODO
    if ( item.classList[0] === 'trash-btn') {
       const todo = item.parentElement;
    //    ANIMATION
       todo.classList.add('fall');
       todo.addEventListener('transitioned', function(){
       todo.remove();
       });
      
    }

    // Check Mark

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        console.log(todo)
        switch (e.target.value) {
            case 'all':
                todo.style.display ='flex';
                break;
                case 'completed':
                    if (todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else { 
                        todo.style.display = 'none';
                    }
                    break;
                    case 'uncompleted':
                        if(!todo.classList.contains('completed')){
                           todo.style.display = 'flex'; 
                        } else { 
                            todo.style.display = 'none';
                        }
                        break;
        }
    });
}
let todos;
function saveLocalTodos(todo){
    // CHECK--HEY Do I already have thing in there?
   
    if(localStorage.getItem('todos')=== null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
todos.forEach(function(todo) {
// Todo DIV
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

// Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

// ADD TODO TO LOCALS
saveLocalTodos(todoInput.value);
// Check Mark Button
const completedButton = document.createElement('button');
completedButton.innerHTML ='<i class="fas fa-check"></i>'
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);

// Check trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML ='<i class="fas fa-trash"></i>'
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

// Append To List
todoList.appendChild(todoDiv);
});

