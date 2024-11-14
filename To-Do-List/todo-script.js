var todoList;

console.log(todoList);




todoList = document.querySelector('#todo-list')
var todoInput = document.querySelector('#todo-input');
console.log(todoInput);

todoInput.addEventListener("keydown", (key) => {

    if(key.code == 'Enter'){
        
        const newLi = document.createElement('Li');
        const newSpan = document.createElement('span')

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        inputValue = '';
    }
})