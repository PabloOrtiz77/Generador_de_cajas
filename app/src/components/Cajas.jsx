import React, { useState } from "react";

const Cajas = (props) => {
  const [color, setColor] = useState('#000000');
  const [dimension, setDimension] = useState("100");
  const [cajasGeneradas, setCajasGeneradas] = useState([]);

  const estilos = {
    background: color,
    height: dimension + "px",
    width: dimension + "px",
    margin: '5px',
  };

  const cajasE = {
    display: 'flex',
    flexWrap: 'wrap', // Hace que las cajas se envuelvan a la siguiente línea
    justifyContent: 'flex-start', // Alineación inicial a la izquierda
    columnGap: '10px',
    rowGap: '10px',
  }

  const Eleccion = (e) => {
    setColor(e.target.value);
  }

  const Tamano = (e) => {
    setDimension(e.target.value);
  }

  const Generar = () => {
    setCajasGeneradas([...cajasGeneradas, { color, dimension }]);
    setColor('#000000');
  }

  return (
    <div>
      <>
        <input type="color" value={color} onChange={Eleccion} />
        <input type="text" value={color} readOnly />
        <input type="text" onChange={Tamano} placeholder="Elige dimension" />
        <button onClick={Generar}>Add</button>
      </>
      <div style={cajasE}>
        {cajasGeneradas.map(
          (caja, index) => (
            <div key={index} style={{ ...estilos, background: caja.color, height: caja.dimension+"px", width: caja.dimension+"px" }}>
              
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Cajas;
