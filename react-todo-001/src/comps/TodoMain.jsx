import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState } from "react";

const todoListSample = [
    { seq: 1, todo: "React 시작" },
    { seq: 2, todo: "UI 구현" },
    { seq: 3, todo: "Spring 서버" },
    { seq: 4, todo: "점심에 뭐 먹을까" },
    { seq: 5, todo: "오늘도 비가 온다" },
    { seq: 6, todo: "내일은 더 많이 비온다" },
]

// todoItem, todoList 요소는 TodoMain 이 만든 것이므로 TodoInput 과 TodoList 는 

/*
1. 코드 시나리오 변경
    TodoInput 에서 사용하던 todoItem(오늘할일 데이터가 저장된 상태변수)값을
    TodoList 가 화면에 표현하는 todoList 상태 배열에 추가 하고싶다.
    TodoInput(컴포넌트) 에서 입력된 값을 TodoList(컴포넌트) 에게 전달하여 배열에 추가를 해야한다.
    React 에서는 형제 컴포넌트 간에는 상태변수나 변수의 값을 전달할 수 없다.

    그래서 TodoInput 과 TodoList 에서 시작된 상태변수를 부모인 TodoMain 으로 끌어올리기를 해야 한다.

*/
const TodoMain = () => {
    // TodoInput(컴포넌트)와 TodoList(컴포넌트)에서 시작된 상태변수를 끌어올려 다시 시작
    const [todoItem, setTodoItem] = useState("");
    // todoItem 의 `상태`를 변경하는 함수:setTodoItem = State 변수의 `상태를 변경`, 변수 자체를 교체
    const [todoList, setTodoList] = useState([]);

    // TodoInput(Comps) 가 데이터를 추가해 달라는 요청을 할 때 사용할 함수
    const todoInsert = () => {
        // alert("데이터 추가 요청");
        // 현재 시점에서 todoItem 상태와, todoList 상태변수, todoInsert() 가 모두 TodoMain 에 있다.
        // todoList 에 todoItem 을 추가하는 코드는 별로 어렵지 않다. - 호출만 하면 됨 todoInsert 에서 접근 가능 List 에 Item 만 추가하면 됨

        // 그런데, todoList 는 상태배열이다
        // 상태배열에는 일반적인 방법으로 요소를 추가할 수 없다.

        // 상태배열에 요소를 추가하려면 
        // 원래 배열을 복제하고, 
        // 요소를 추가한 다음 
        // 원래 배열과 교체를 해야 한다.

        // totoList 상태 배열의 "상태(값)"를 변경하는 함수
        const newTodoList = [...todoList, { todo: todoItem }];
        // [...todoList] : todoList 를 펼쳐서 하나씩 복제해라, todoItem : 함수 추가해라
        setTodoList(newTodoList);


    }
    return (
        <div className="todoMain">
            <header className="todoHeader">
                <h1>지금 할일!!</h1>
            </header>
            <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
            <TodoList todoList={todoList} />
        </div>
    )
};

export default TodoMain;