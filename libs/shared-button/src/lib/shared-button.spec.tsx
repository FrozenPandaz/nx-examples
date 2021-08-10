import { render } from '@testing-library/react';

import SharedButton from './shared-button';

describe('SharedButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedButton />);
    expect(baseElement).toBeTruthy();
  });
});
