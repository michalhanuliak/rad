import { render } from '@testing-library/react';

import { TaskForm } from './TaskForm';

describe('TaskForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TaskForm
        addButtonLabel={''}
        onSubmit={function (
          title: string,
          description?: string | undefined
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
