import { render } from '@testing-library/react';

import { Task } from './Task';
import { TaskDto } from '@rad/infrastructure';

describe('Task', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Task
        title={''}
        description={''}
        date={new Date()}
        author={''}
        onRemove={function (): void {
          throw new Error('Function not implemented.');
        }}
        onUpdate={function (data: TaskDto): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
