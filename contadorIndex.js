const $app = document.getElementById("app");
const {useState, Fragment} = React 

function Contador () {
 //FORMA LARGA
  let contadorState= useState(50);
  let contadorValue = contadorState[0];
  let actualizarContador = contadorState[1];


  return(
    <Fragment>
      <span>{contadorValue}</span>
      <button onClick= {()=> {actualizarContador( contadorValue +1) }}>Incrementar +</button>
      <button onClick= {()=> {actualizarContador( contadorValue -1) }}>Decrementar -</button>
    </Fragment>
      ) 
  }

ReactDOM.render (
  <div>
    <Contador />
  </div>, $app
)