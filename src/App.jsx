import imgRestaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
import { useState } from 'react';

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPagina] = useState(0);

  /* o react não consegue criar vários elementos html de uma vez sem um elemento pai englobando tudo. 
  Caso queiramos criar vários elementos de uma vez sem a presença de um elemento pai, devemos usar uma tag vazia englobando tudo */
  return (
    <>
      <img src={imgRestaurante} alt="" className="capa" />
      <Navegacao atualizarPagina={atualizarPagina} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(item => (
          <ItemCardapio
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
