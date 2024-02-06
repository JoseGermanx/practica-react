// eslint-disable-next-line react/prop-types
const Car = ({ nombre, modelo, marca }) => {
  return (
    <div className="container">
      <h2>Auto: {nombre}</h2>
      <p>Modelo: {modelo}</p>
      <p>Marca: {marca}</p>
    </div>
  );
};

export default Car;
