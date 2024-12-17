import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const WelcomeMessage = props.isLoggedIn
    ? "Welcome " + props.username
    : "Please Log in to continue";
  return <h2>{WelcomeMessage}</h2>;
};
User.prototype = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

User.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default User;
