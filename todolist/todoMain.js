document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const completedCounter = document.getElementById('completed-counter');
    let completedTasksCount = 0;

    // Function to create a new todo item
    function createTodoItem(task) {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        listItem.innerHTML = `
            <label>
                <input type="radio" class="complete-checkbox">
                <span>${task}</span>
            </label>
            <button>Delete</button>
        `;

        // Handle radio button change to mark task as completed
        listItem.querySelector('.complete-checkbox').addEventListener('change', () => {
            listItem.classList.add('fade-out');
            completedTasksCount++;
            completedCounter.textContent = completedTasksCount;
            setTimeout(() => listItem.remove(), 300);
        });

        // Handle delete button click
        listItem.querySelector('button').addEventListener('click', () => {
            listItem.classList.add('fade-out');
            setTimeout(() => listItem.remove(), 300);
        });

        todoList.appendChild(listItem);
    }

    // Add todo item when clicking the button
    addBtn.addEventListener('click', () => {
        const task = input.value.trim();
        if (task) {
            createTodoItem(task);
            input.value = '';
        }
    });

    // Add todo item when pressing Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});
