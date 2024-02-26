import { render, renderHook } from '@testing-library/react';

import { ControlledTextField } from './ControlledTextField';
import { useForm } from 'react-hook-form';

describe('ControlledTextField', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useForm());
    const { baseElement } = render(
      <ControlledTextField control={result.current.control} name="test" />
    );
    expect(baseElement).toBeTruthy();
  });
});
