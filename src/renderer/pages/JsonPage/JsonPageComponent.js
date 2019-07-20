const PageBase = require('../common/PageBase');

import React from 'react';
// import PageBase from 'Pages/common/PageBase';
import { Button } from '@material-ui/core';

const JsonPage = ({ handleAddWatcher }) => {
  console.log('render...');

  return (
    // <PageBase>
      <Button variant='contained' color='primary' onClick={handleAddWatcher}>
        Add watcher
      </Button>
    // </PageBase>
  );
};

export default JsonPage;
