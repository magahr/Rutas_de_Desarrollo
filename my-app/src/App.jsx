import React from 'react'
import { Saludo } from './components/Saludo'

export function App() {
  const mostrarComponente = false
  return (
    <div> 
        <h1>Hoy es 22-10-2024 y estoy en el componete APP, pero en la funcion</h1>
        { mostrarComponente ? <Saludo nombre="Juan" esAmigo={true} ></Saludo> : 'Que no hay nada que mostrar'}

    <Saludo nombre = "Pepito" esAmigo={true} ></Saludo>
    </div>
  )
}

