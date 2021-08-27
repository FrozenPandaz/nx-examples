import { render } from '@testing-library/react';

import EnumLib from './enum-lib';

describe('EnumLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnumLib />);
    expect(baseElement).toBeTruthy();
  });
});
