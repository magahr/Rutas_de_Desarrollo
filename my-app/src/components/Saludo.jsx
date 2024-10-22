import React from 'react'

export function Saludo(props) {
  
  const edad = 10
  const usuarios = {
        nombre: "Hola en la variable de usuarios, en el componente Saludo",
        esMayor: edad >= 18 ? "Es mayor" : "Es menor"
  }

  return (
      <div>
        {/* {nombre}, codigo javascript */}
        <h1>hola, {props.nombre}</h1>
        {/* *operacdor ternario, si es true, es decir si viene algun valor hace la primera instruccion sino despues de los dos puntos hace ootra cosa */}
        {props.esAmigo ? <p>eres mi amigo</p> : <p>eres un conocido</p> }
        <p>{usuarios.esMayor}</p>
      </div>
  )
}
