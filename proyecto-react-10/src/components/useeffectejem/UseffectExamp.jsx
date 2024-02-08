
import { useEffect, useState } from "react";


function UseffectExamp() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // useEffect(funcionQueEjecutaCodigo, dependencias)


  //Se ejecuta al montar el componente y cada vez que se renderiza en componente
// useEffect(() => {
//   console.log("useEffect sin dependencias")
// })

// Se ejecuta sólo al cargar el componente (porque le estamos indicando una dependencia vacía)
useEffect(() => {
  console.log("useEffect con dependencias")
}, [])

// Se ejecuta al montar el componente y cada vez que cambia count1
useEffect(() => {
  console.log("useEffect al cambiar count1")
}, [count1])

// Se ejecuta al montar el componente y cada vez que cambia count2
useEffect(() => {
  console.log("useEffect al cambiar count2")
}, [count2])


  return (
    <div>
      <p>Clicks en contador 1: {count1}</p>
      <p>Clicks en contador 2: {count2}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click me 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me 2</button>
    </div>
  )
}

export default UseffectExamp