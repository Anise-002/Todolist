(function(){
    const todolistSection = document.getElementById("todolist-section");
    const todoForm = todolistSection.querySelector("form");
    const todoInput = todoForm.querySelector("input");
    const todoList = todolistSection.querySelector("ul");

    let todoListArr = [];

    const TODO_KEY = "todo";
    const LINE_THROUGH = "through-line";
    const NOCOLOR = "nocolor";

    function saveToDo(todo){
        localStorage.setItem(TODO_KEY, JSON.stringify(todo));
    } 

    
    //checkBox 클릭 실행 함수
    function drawingLine(e){
        const text = e.target.parentElement.parentElement;
        console.log(text);
        const checkBox = e.target.parentElement;
        if(text.classList.contains(LINE_THROUGH)){
            text.classList.remove(LINE_THROUGH);
            todoListArr.forEach(function(element){
                if(element.id === parseInt(text.id)){
                    element.class = "";
                }
            }); 
            saveToDo(todoListArr);
            checkBox.classList.remove(NOCOLOR); 
        }else{
            text.classList.add(LINE_THROUGH);
            todoListArr.forEach(function(element){
                if(element.id === parseInt(text.id)){
                    element.class = LINE_THROUGH;
                }
            });        
            checkBox.classList.add(NOCOLOR);
            saveToDo(todoListArr);
        }
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
        li.innerHTML = `<div>${todo.text}</div>`;
        //checkBox span 생성
        const checkBox = document.createElement('span');
        checkBox.innerHTML = `<i class="fas fa-check"></i>`;
        // delete span 생성
        const span = document.createElement('span');
        span.classList.add('color');
        span.innerHTML = `<i class="fas fa-minus-circle"></i>`;

        if(todo.class === LINE_THROUGH){
            li.classList.add(todo.class);
            checkBox.classList.add(NOCOLOR);
        }else{
            li.class = "";
        }
        //조합
        li.prepend(checkBox);
        li.appendChild(span);
        todoList.appendChild(li);

        //삭제 이벤트
        span.addEventListener('click',deleteHnadler);
        //checkBox 클릭 이벤트
        checkBox.addEventListener('click', drawingLine);

    }

    function submitHandler(e){
        e.preventDefault();
        const todoInputValue = todoInput.value;
        const todoObject = {
            text : todoInputValue,
            id : Date.now(),
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
        console.log(parseToDo);
        todoListArr = parseToDo;
        todoListArr.forEach(showHtml);
    }
    
})();
