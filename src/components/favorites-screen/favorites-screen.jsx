import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import FavoritesList from './favorites-list';

const FavoritesScreen = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesScreen;
