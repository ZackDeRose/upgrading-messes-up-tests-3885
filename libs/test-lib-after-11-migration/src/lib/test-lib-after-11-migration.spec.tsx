import React from 'react';
import { render } from '@testing-library/react';

import TestLibAfter11Migration from './test-lib-after-11-migration';

describe('TestLibAfter11Migration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestLibAfter11Migration />);
    expect(baseElement).toBeTruthy();
  });
});
