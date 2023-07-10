import React from 'react'
import "./style.css";

function Header() {
  return (
    <div>
      <div className='Titulo'>
        <h1>Bem vindo ao TendTudo</h1>
      </div>
      <div className='Login'>
          <button className='BotaoLogin'>Login</button>
          <button className='BotaoLogin'>Cadastro</button>
      </div>

    </div>
  )
}

export default Header