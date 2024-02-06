// eslint-disable-next-line react/prop-types
const Car = ({ nombre, modelo, marca, mostrar }) => {
  return (
    <div className="container">
      {mostrar ? (
        <>
          <h2>Auto: {nombre}</h2>
          <p>Modelo: {modelo}</p>
          <p>Marca: {marca}</p>
        </>
      ) : (
        <h1>No hay nada que mostrar</h1>
      )}
    </div>
  );
};

export default Car;
