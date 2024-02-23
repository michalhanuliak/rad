import { Button, Stack, TextField } from '../../atoms';

/* eslint-disable-next-line */
export interface TaskFormProps {}

export function TaskForm(props: TaskFormProps) {
  return (
    <Stack p="1.2rem 1.4rem" vertical>
      <TextField label="Title" />
      <TextField label="Title" />
      <Stack>
        <Stack ml="auto">
          <Button>Cancel</Button>
          <Button variant="contained">Add Task</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TaskForm;
