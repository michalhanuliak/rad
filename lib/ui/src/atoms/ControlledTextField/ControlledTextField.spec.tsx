import { render } from '@testing-library/react';

import ControlledTextField from './ControlledTextField';

describe('ControlledTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlledTextField />);
    expect(baseElement).toBeTruthy();
  });
});
