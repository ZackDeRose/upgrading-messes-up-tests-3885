import React from 'react';

import './test-lib.css';

/* eslint-disable-next-line */
export interface TestLibProps {}

export const TestLib = (props: TestLibProps) => {
  return (
    <div>
      <h1>Welcome to test-lib component!</h1>
    </div>
  );
};

export default TestLib;
