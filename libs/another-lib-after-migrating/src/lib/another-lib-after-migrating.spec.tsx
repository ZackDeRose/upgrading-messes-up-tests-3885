import React from 'react';
import { render } from '@testing-library/react';

import AnotherLibAfterMigrating from './another-lib-after-migrating';

describe('AnotherLibAfterMigrating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnotherLibAfterMigrating />);
    expect(baseElement).toBeTruthy();
  });
});
