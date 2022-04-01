import React from 'react';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustom from './ProdutoCustom';
import {
  useParams,
  useLocation,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustom />} />
      </Routes>
    </div>
  );
};

export default Produto;
