import { Task, TaskForm } from '@rad/ui/organisms';
import { Stack } from '@rad/ui/atoms';
import {
  useCreateTaskAdapter,
  useRemoveTaskAdapter,
  useUpdateTaskAdapter,
} from '../adapters';
import { Task as TTask } from '../domain';
import { TaskDto, useUpdateTask } from '@rad/infrastructure';

export type ContainerProps = {
  data: TTask[];
};

export function Container({ data }: ContainerProps) {
  const { createTask } = useCreateTaskAdapter('1');
  const { removeTask } = useRemoveTaskAdapter('1');
  const { updateTask } = useUpdateTaskAdapter('1');

  const renderedData = data.map(
    ({ id, title, description, updatedAt, author, isCompleted }: any) => {
      return (
        <Task
          key={id}
          title={title}
          description={description}
          date={updatedAt}
          author={author}
          isChecked={isCompleted}
          onRemove={() => removeTask(id)}
          onUpdate={(data) => updateTask(id, data)}
        />
      );
    }
  );

  return (
    <Stack vertical>
      {renderedData}
      <TaskForm onSubmit={createTask} addButtonLabel="Add" />
    </Stack>
  );
}
