import React, { Component } from "react";

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    addTask(e) {
        fetch('/api/tasks',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            M.toast({html: 'Task Saved'})
            this.setState({title: '', description: ''})
            this.fetchTasks()
        })
        .catch(err => console.error(err))
        e.preventDefault(); //Previene que la pagina se recargue al enviar datos a un formulario
    }

    componentDidMount() {
        this.fetchTasks()
    }

    fetchTasks () {
        fetch('/api/tasks')
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data})
            console.log(this.state.tasks)
        })
    }

    deleteTask (id) {
        fetch(`/api/tasks/${id}` , {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            M.toast({html: 'Task Deleted'})
            this.fetchTasks()
        })
    }

    handleChange (e) {
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/* Navegacion */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/"> Mern Stack</a>
                    </div>    
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Titulo Tarea" value={this.state.title} ></input>
                                            </div>
                                        </div>  
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} className="materialize-textarea" placeholder="Descripcion Tarea" value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Enviar
                                        </button>                                   
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th> Title </th>
                                        <th> Description </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map( task => {
                                            return (
                                                <tr key={task.id}>
                                                    <td>
                                                        {task.title}
                                                    </td>
                                                    <td>
                                                        {task.description}
                                                    </td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={() => this.deleteTask(task.id)}>
                                                            <i className="material-icons"> delete </i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                            <i className="material-icons"> edit </i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;