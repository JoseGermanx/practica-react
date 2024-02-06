import "./App.css";
import Car from "./components/car/Car";

function App() {
  const listaDeAutos = [
    { nombre: "Camaro", modelo: "1996", marca: "Chevrolet", id: 1 },
    { nombre: "Civic", modelo: "2022", marca: "honda", id: 2 },
    { nombre: "Mustang", modelo: "2010", marca: "Ford", id: 3 },
    { nombre: "Corolla", modelo: "2015", marca: "Toyota", id: 4 },
    { nombre: "Golf", modelo: "2018", marca: "Volkswagen", id: 5 },
  ];

  return (
    <>
      {listaDeAutos.length > 0 ? (
        listaDeAutos.map((auto, index) => {
          return (
            <Car
              key={index}
              nombre={auto.nombre}
              modelo={auto.modelo}
              marca={auto.marca}
            />
          );
        })
      ) : (
        <h1>No hay autos para mostrar</h1>
      )}
    </>
  );
}

export default App;
