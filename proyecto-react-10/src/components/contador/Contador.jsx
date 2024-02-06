import { useState } from "react"



const Contador = () => {

    const [contador, setContador] = useState(0)
     ///  nombreDelEstado, funciónQueModificaElEstado = valor inicial del estado

     const [titulo, setTitulo] = useState("Hola Mundo")

    //  const [shoppingCart, setShoppingCart] = useState([])

     const incrementar = () => {
        setContador(contador + 1)
     }

     const decrementar = () => {
        setContador(contador - 1)
     }

     const reset = () => {
        setContador(0)
     }

  return (

    <div className="container">
        <h1>{titulo}</h1>
        <p>EL valor actual del contador es: {contador}</p>
        <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
        <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
        <button className="btn btn-warning" onClick={reset}>Reset</button>
        <button className="btn btn-info" onClick={() => setTitulo("Contador")}>Cambiar título</button>

    </div>
  )
}

export default Contador