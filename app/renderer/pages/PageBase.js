import React from 'react';
import { Container } from '@material-ui/core';

const PageBase = (props) => {
  return (
    <Container maxWidth="lg">
      {props.children}
    </Container>
  );
};

export default PageBase;
