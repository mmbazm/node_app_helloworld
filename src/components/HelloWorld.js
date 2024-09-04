import React from 'react';
import { Button, Typography } from '@mui/material';

const HelloWorld = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Hello, World!
      </Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
};

export default HelloWorld;
