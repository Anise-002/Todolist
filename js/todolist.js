(function(){
    const todolistSection = document.getElementById("todolist-section");
    const todoForm = todolistSection.querySelector("form");
    const todoInput = todoForm.querySelector("input");
    const todoList = todolistSection.querySelector("ul");

    let todoListSave = [];

    function submitHandler(e){
        e.preventDefault();
        const todoInputValue = todoInput.value;
        todoInput.value = null;
        const li = document.createElement('li');
        li.innerText = todoInputValue;
        todoListSave.push(todoInputValue);
        const span = document.createElement('span');
        span.innerHTML = `<i class="fas fa-minus-circle"></i>`;
        todoList.appendChild(li);
        li.appendChild(span);
    }


    todoForm.addEventListener('submit',submitHandler);
})();
