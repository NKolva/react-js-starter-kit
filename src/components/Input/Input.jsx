import React from 'react';

import classes from './input.module.scss';

export const Input = (props) => {
  const { value, onChange } = props;

  return <input type="text" className={classes.Input} onChange={onChange} value={value} />;
};
