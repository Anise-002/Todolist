# TODO-LISt

## 프로젝트 목표 
1. 라이브러리를 이용하지 않고, Javascript만을 이용해 todolist를 만든다.
2. API를 이용해 외부의 데이터를 받아 화면에 구현시킨다.
3. Javascript에 대한 학습과 LocalStorage에 대해 학습한다.

### ✨ [Project Demo](https://anise-002.github.io/Todolist/)
<div> 
    <img src='./img/README/todolist.gif' width="75%">
</div>

<br>

## 구현된 기능

> 1. local Storage를 이용한 로그인
> 2. Todolist 구현
> 3. API를 이용한 날씨와 명언
> 4. D-day 계산기

<br>

### 1. local Storage를 이용한 로그인
```javascript
const saveName = localStorage.getItem(USERNAME_KEY);
function submitHandler(event){
    event.preventDefault();
    loginCon.classList.add(HIDDEN);
    todolistCon.classList.remove(HIDDEN);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    todoUsername.innerText = loginInput.value;
    todolistCon.style.display = 'flex';    
}

if(saveName === null){
    loginForm.addEventListener("submit", submitHandler);
}else{
    todoUsername.innerText = saveName;
    loginCon.classList.add(HIDDEN);
    todolistCon.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit", submitHandler);
```
+ input에 입력된 value의 값을 localStorage를 이용해 값을 저장합니다.

### 2. Todolist 구현
#### 할일을 입력 후 데이터 저장
```javascript
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
```
+ input을 submit하면 입력된 value의 값을 객체로 만들어 todoListArr 배열에 저장합니다.
+ 값이 저장된 배열을 localStroge에 저장하여 윈도우가 꺼져도 데이터가 유지되도록 합니다.

#### localStorage에 데이터 저장
```javascript
function saveToDo(todo){
    localStorage.setItem(TODO_KEY, JSON.stringify(todo));
} 
```
+ 데이터를 담고 있는 todoListArr 배열을 JSON.stringify()메서드를 이용해 배열을 그대로를 문자 타입으로 변환시켜 값을 localStorage에 저장합니다.
+ localStorage : 문자타입만을 데이터로 저장합니다.

#### 제출된 데이터를 화면에 구현
```javascript
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
    //조합
    li.prepend(checkBox);
    li.appendChild(span);
    todoList.appendChild(li);
}
```



#### 추가 기능 : 체크박스(라인그리기), 할일 삭제 기능