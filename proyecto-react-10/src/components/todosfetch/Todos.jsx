import {useState, useEffect} from 'react'

const Todos = () => {

    //inicializacion del estado todos
    const [todos, setTodos] = useState([])


    //useeffect que se ejecuta al montar el componente
    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => setTodos(data)) // guardamos el resutlado de la petición en el estado
        .catch(error => console.log(error))
    }, [])

    
  return (
    <div className='container'>
        {todos.length > 0 ? todos.map(tarea => (
            <div className="card mb-4" style={{width: "18rem"}} key={tarea.id}>
            <div className="card-body">
              <h5 className="card-title text-info">{tarea.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Tarea n° {tarea.id}</h6>
              <p className="card-text">{tarea.completed ? "Completada": "Incompleta" }</p>
            </div>
          </div>
        )): <h1>Cargando......</h1>}
    </div>
  )
}

export default Todos