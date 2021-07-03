/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent) {
  const Auth = ({ history, ...props }) => {
    useEffect(() => {
      const checkIsUserLoggedIn = () => {
        const isLoggedIn = localStorage.getItem('isUserLoggedIn');
        return isLoggedIn;
      };

      const getLoggedInUserInfo = () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        return userInfo;
      };

      const isUserLoggedIn = checkIsUserLoggedIn();
      let userInfo = {};
      if (isUserLoggedIn) {
        userInfo = getLoggedInUserInfo();
        history.push({
          pathname: '/',
          user: userInfo,
        });
      } else {
        history.push('/login');
      }
    }, [history]);

    return <ComposedComponent {...props} />;
  };

  Auth.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  Auth.defaultProps = {};

  return withRouter(Auth);
}
