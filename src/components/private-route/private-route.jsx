import React from 'react';
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';


const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
