import React from 'react';
import Head from './Head';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/*   <Head title={'Home'} description="Essa é a descrição da Home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa e a Home</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;