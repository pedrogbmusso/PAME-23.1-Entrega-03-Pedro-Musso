import React from 'react'
import "./style.css";

function Pesquisa() {
  return (
    <div className='conjunto'>
      <div className='EspacoBusca'>
        <input className='pesquisa' type = 'text' placeholder='Buscar itens...'></input>
      </div>
      <div className='Categorias'>             
        <button className='botaoCategoria'>camisas</button>                 
        <button className='botaoCategoria'>notebooks</button>                 
        <button className='botaoCategoria'>refrigerantes</button>                 
        <button className='botaoCategoria'>livros</button>              
      </div>   
    </div>
  )
}

export default Pesquisa