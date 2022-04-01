import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustom from './ProdutoCustom';
import ProdutoDescricao from './ProdutoDescricao';
import Home from './Home';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import Footer from './Footer';
import Sobre from './Sobre';
import Login from './Login';
import React from 'react';
import Produto from './Produto';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
