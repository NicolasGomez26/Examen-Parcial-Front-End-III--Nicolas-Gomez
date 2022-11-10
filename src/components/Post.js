import React, { useState } from 'react'
// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")

export default function Post({post, darLike}) {
  const [total, setTotal] = useState(0)
  const masDe10 = () => {
    if (total > 10) {
      return "Más de 10 likes!!"
    }
  }
  const {titulo, texto} = post

  const decirACual = (titulo) => {
    console.log("A '" + titulo + "' le dieron un like 💙");
  }
  return (
    <div className='posteo'>
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button onClick={() => {darLike(); setTotal(total+1); decirACual(titulo)}}>💙</button>
      <h5>Likes: {total}</h5>
      <h4>{masDe10()}</h4>
    </div>
  )
}
