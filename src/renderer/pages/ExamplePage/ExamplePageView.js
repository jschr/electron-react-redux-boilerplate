import React from 'react';
import PageBase from 'Pages/common/PageBase';
import { Button } from '@material-ui/core';

const ExamplePageView = ({ likeIt, likes }) => {
  return (
    <PageBase>
      <Button variant="contained" color="primary" onClick={likeIt}>
        Like it!
      </Button>
      <div>Number of likes: {likes}</div>
    </PageBase>
  );
};

export default ExamplePageView;
