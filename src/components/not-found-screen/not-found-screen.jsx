import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundScreen = () => {
  return (
    <>
      <div className="container">
        <h1>404. Page not found</h1>
        <Link to={AppRoute.ROOT}>Вернуться на главную</Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
