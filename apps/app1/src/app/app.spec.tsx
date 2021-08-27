import { render } from '@testing-library/react';

import App from './app';

import { Animal, AnimalType } from '@react-test/enum-lib';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();

    const cat: Animal = { type: AnimalType.Cat }
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to app1!')).toBeTruthy();
  });
});
