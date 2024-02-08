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
            <div className='border border-1' key={tarea.id}>
                <h2>{tarea.title}</h2>
                <h2>{tarea.id}</h2>
                <p>{tarea.completed ? 'Completada' : 'Incompleta'}</p>
            </div>
        )): <h1>Cargando......</h1>}
    </div>
  )
}

export default Todos