const API_URL = 'http://localhost:3002/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // fetch todos
  fetchTodos();
});

// Fetch todos from backend
function fetchTodos() {
    //  write here
    fetch(API_URL).then(response => response.json()).then(todos => {
        todos.forEach(todo => addTodoToDOM(todo));
    })
    .catch(error => console.error("Error fatching todo", error))
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    //  write here
    const todoList = document.getElementById('todo-list');

    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', todo.id)

    const title = document.createElement('span');
    title.textContent = todo.task;

    const completeButton = document.createElement('button');
    completeButton.textContent = todo.completed ? 'Undo' : 'Complete';
    completeButton.addEventListener('click', () => {
        toggleTodo(todo.id, todo.completed);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id);
    });

    // Add completed class if todo is completed
    if (todo.completed) {
        todoItem.classList.add('completed');
    }

    todoItem.appendChild(title);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    //  write here
    const titleInput = document.getElementById('todo-input');

    if (!titleInput) {
        console.log('Input not provided');
        return;
    }

    const newTodo = { task: titleInput.value }

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    })
    .then(response => response.json())
    .then(todo => {
        addTodoToDOM(todo);
        titleInput.value = '';
    })
    .catch(error => console.error("Error adding todo: ", error))
});

// Toggle todo completion
function toggleTodo(id, completed) {
    // Implementation for toggling todo completion status
    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
    })
    .then(response => response.json())
    .then(todo => {
        // Update DOM to reflect completion status
        const todoItem = document.querySelector(`[data-id='${id}']`);
        todoItem.classList.toggle('completed', todo.completed);
    })
    .catch(error => console.error("Error toggling todo", error));
}

// Delete a todo
function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        const todoItem = document.querySelector(`[data-id='${id}']`);
        todoItem.remove();
    })
    .catch(error => console.error("Error deleting todo", error));
}
