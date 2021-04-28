import React from 'react'

const numbers = [
    {id:"1",nome:"Matheus",ace:21},
    {id:"1",nome:"Matheus",ace:21},
    {id:"1",nome:"Matheus",ace:21},
    {id:"1",nome:"Matheus",ace:21}
]

const listItens = numbers.map(pessoa => 
   <ul>
       <li>{pessoa.id} | {pessoa.nome} | {pessoa.ace}</li>
   </ul>
)
dsfs

export default () =>
    <>
        {listItens}
        <h2>Exemplo de um componente React</h2>
    </>


