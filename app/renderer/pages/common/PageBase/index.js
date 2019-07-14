import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './useStyles';

const PageBase = (props) => {
  const cs = useStyles();

  console.log(cs.container);

  return (
    <div className={cs.container}>
      {props.children}
    </div>
  );
};

export default PageBase;
