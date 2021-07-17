import React from "react"
import TodoCard from "./TodoCard"
const TodoList = (props) => {  //Accepts the todos as props to render

    const renderTodoList = props.todos.map((todo) => {
        return (
           <TodoCard todo={todo}></TodoCard> 
        )
    }) 
    return (
        <div className="ui celled list">
            {renderTodoList}
        </div>
    )
}

export default TodoList;