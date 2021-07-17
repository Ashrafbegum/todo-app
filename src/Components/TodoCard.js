import React from "react"

const TodoCard = (props) => {
    const {id, task, description} = props.todo  //Destructuring 
    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {task}   {/*Without Destructuring it would be {props.todo.task}*/}
                </div>
                <div>
                    {description}  {/*Without Destructuring it would be {props.todo.task}*/}
                </div>
                <i className="trash alternate outline icon"
                   style={{color: "red", marginTop: "7px"}}></i>
            </div>
        </div>        
    )
}

export default TodoCard