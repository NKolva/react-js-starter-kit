import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './button.module.scss';

export const Button = (props) => {
  const { title, type = 'primary', onClick } = props;

  const buttonStyles = classNames({
    [classes.ButtonPrimary]: type === 'primary',
    [classes.ButtonSecondary]: type === 'secondary',
    [classes.ButtonDanger]: type === 'danger',
  });

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
