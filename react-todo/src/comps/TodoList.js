const TodoList = ({ todoList }) => {
    const todoItemView = todoList.map(item => {
        return <div>{item}</div>
    });
    return <div className="list">{todoItemView}</div>; // 보여주기
};
export default TodoList;