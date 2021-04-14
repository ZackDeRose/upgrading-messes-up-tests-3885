import { render } from '@testing-library/react';

import TestLibAfter12Migration from './test-lib-after-12-migration';

describe('TestLibAfter12Migration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestLibAfter12Migration />);
    expect(baseElement).toBeTruthy();
  });
});
