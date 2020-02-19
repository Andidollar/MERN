import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <div>
    {localStorage.setItem("token", window.location.search.split("=")[1])}
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  </div>
);

PrivateRoute.propTypes = {
  login: PropTypes.object.isRequired
};

  const mapStateToProps = state => {
    console.log('redux', state)
    return {
      login: state.login
    };
  };

export default connect(mapStateToProps)(PrivateRoute);

