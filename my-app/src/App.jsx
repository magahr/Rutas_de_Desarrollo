import React from 'react'
//import { Saludo } from './components/Saludo'
import { User } from './components/User'

export function App() {
  const mostrarComponente = false
  return (
    //<div> 
   //     <h1>Hoy es 22-10-2024 y estoy en el componete APP, pero en la funcion</h1>
   //     { mostrarComponente ? <Saludo nombre="Juan" esAmigo={true} ></Saludo> : 'Que no hay nada que mostrar'}

   // <Saludo nombre = "Pepito" esAmigo={true} ></Saludo>
   // <h1>Hoy es 24-10-2024 estoy dentro del componente APP y estoy mostrando el componente User</h1>
   // <User/>

   // </div>
   <div>
      <h1> Hola, App de React</h1>
      <User/>

   </div>




  )
}

