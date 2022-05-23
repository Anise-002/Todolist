(function(){
    const todolistSection = document.getElementById("todolist-section");
    const todoForm = todolistSection.querySelector("form");
    const todoInput = todoForm.querySelector("input");
    const todoList = todolistSection.querySelector("ul");

    let todoListArr = [];

    const TODO_KEY = "todo";

    function saveToDo(todo){
        localStorage.setItem(TODO_KEY, JSON.stringify(todo));
    } 

    function deleteHnadler(e){
        const li = e.target.parentElement.parentElement;
        const newArr = todoListArr.filter((item) => item.id !== parseInt(li.id));
        todoListArr = newArr;
        saveToDo(todoListArr);
        li.remove();
    }

    function showHtml(todo){
        //li 생성
        const li = document.createElement('li');
        li.id = todo.id;
        li.innerText = todo.text;
        const span = document.createElement('span');
        span.innerHTML = `<i class="fas fa-minus-circle"></i>`;
        li.appendChild(span);
        todoList.appendChild(li);

        //list 삭제
        span.addEventListener('click',deleteHnadler);
    }

    function submitHandler(e){
        e.preventDefault();
        const todoInputValue = todoInput.value;
        const todoObject = {
            text : todoInputValue,
            id : Date.now()
        }
        todoInput.value = null;
        showHtml(todoObject);
        todoListArr.push(todoObject);
        saveToDo(todoListArr);
    }

    todoForm.addEventListener('submit',submitHandler);

//로컬저장소에 데이터가 있는 경우 실행 함수
    const savedToDo = localStorage.getItem(TODO_KEY);

    if(savedToDo !== null){
        parseToDo = JSON.parse(savedToDo); //문자 -> 배열
        todoListArr = parseToDo;
        todoListArr.forEach(showHtml);
    }
    
})();
