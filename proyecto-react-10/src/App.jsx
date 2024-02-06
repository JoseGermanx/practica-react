
import './App.css'
import Car from './components/car/Car'

function App() {

  return (
    <>
    <Car nombre="Camaro" modelo="1996" marca="Chevrolet" mostrar={true}/>
    <Car nombre="Civic" modelo="2022" marca="honda" mostrar={true}/>
    <Car nombre="Mustang" modelo="2010" marca="Ford" mostrar={true}/>
   
    </>
  )
}

export default App
