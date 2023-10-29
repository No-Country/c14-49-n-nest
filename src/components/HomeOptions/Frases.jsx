const Frases = ({setImagenSeleccionada}) => {
  const goToCreate=(event)=>{
    const value = event.target.value
    console.log(value)
    setImagenSeleccionada(value)
  }
  return (
    <div className="w-4/5  flex flex-col items-center justify-center my-2">
      hola
      <button value="createFrases" onClick={goToCreate}>Crea tu propia frase</button>
    </div>
  );
};
export default Frases;