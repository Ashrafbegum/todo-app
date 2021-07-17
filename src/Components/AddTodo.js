import React from "react"
class AddTodo extends React.Component {
    state = {  //Create a class state object --- Class component is not using react Hooks
        task: "",
        description: "",
    }

    add = (e) => {
        e.preventDefault()  //It prevents the page from refreshing
        if(this.state.task === "" || this.state.description === "") {
            alert("All the fields are mandatory")
            return
        }
        this.props.addTodoHandler(this.state)
        this.setState({task: "", description: ""})
    }
    render() {
        return (
            <div className="ui main">
                <h2> Add Todo</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Task</label>
                        <input type="text"
                                name="task" 
                                placeholder="Enter task" 
                                value={this.state.task} 
                                onChange = { (e) => this.setState({task: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <input type="text" 
                        name="description"
                        placeholder="Enter description" 
                        value={this.setState.description}
                        onChange= { (e) => this.setState({description: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo