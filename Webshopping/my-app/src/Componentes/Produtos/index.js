import React from 'react'
import "./style.css";
import notebooks from "../Imagens/notebooks.jpg";
import camisas from "../Imagens/camisas.jpg";
import refrigerantes from "../Imagens/refrigerantes.jpg";
import livros from "../Imagens/livros.jpg";


function Produtos() {
  return (
    <div className="produtos">
      <div className='ListaProdutos'>
            <img src={camisas} alt="Calça Jeans" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>

        <div className='ListaProdutos'>          
            <img src={notebooks} alt="Casaco básico" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>
          
        <div className='ListaProdutos'>
            <img src={refrigerantes} alt="Camisetas Básicas" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>

        <div className='ListaProdutos'>
            <img src={livros} alt="Casaco básico" width="175" height="100" />          
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>
    </div>
  )
}

export default Produtos