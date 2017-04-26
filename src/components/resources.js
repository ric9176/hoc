import React from 'react';
import withAuth from './require_auth';

const Resources = () => (
    <div>
      <h1>Secret whatevs</h1>
    </div>
  );

export default withAuth(Resources);
