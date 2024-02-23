import { Task, TaskForm } from '@rad/ui/organisms';
import { Stack } from '@rad/ui/atoms';

export type ContainerProps = {
  data: any;
};

export function Container({ data }: ContainerProps) {
  const renderedData = data.map(
    ({ id, title, description, date, author, isChecked }: any) => {
      return (
        <Task
          key={id}
          title={title}
          description={description}
          date={date}
          author={author}
          isChecked={isChecked}
        />
      );
    }
  );
  return (
    <Stack vertical>
      {renderedData}
      <TaskForm />
    </Stack>
  );
}
