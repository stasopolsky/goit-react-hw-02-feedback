import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <h4 className={s.title}>{message}</h4>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
