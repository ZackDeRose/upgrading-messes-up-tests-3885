import React from 'react';
import { render } from '@testing-library/react';

import TestLibAfterMigration from './test-lib-after-migration';

describe('TestLibAfterMigration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestLibAfterMigration />);
    expect(baseElement).toBeTruthy();
  });
});
