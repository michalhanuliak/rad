import { Button, Stack } from '../../atoms';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { ControlledTextField } from '../../atoms';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export type TTaskForm = FieldValues & {
  title: string;
  description?: string;
};

export interface TaskFormProps {
  defaultValues?: TTaskForm;
  addButtonLabel: string;
  onSubmit: (title: string, description?: string) => void;
  onCancel?: () => void;
}

export function TaskForm({
  defaultValues,
  addButtonLabel,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  const {
    handleSubmit: handleFormSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TTaskForm>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues,
  });

  const handleSubmit: SubmitHandler<TTaskForm> = (data) => {
    reset();
    onSubmit(data.title, data.description);
  };

  const handleCancel = () => {
    reset();
    onCancel?.();
  };

  return (
    <Stack
      p="1.2rem 1.4rem"
      component="form"
      onSubmit={handleFormSubmit(handleSubmit)}
      vertical
    >
      <ControlledTextField
        control={control}
        name="title"
        label="Title"
        error={!!errors?.title}
      />
      <ControlledTextField
        control={control}
        name="description"
        label="Description"
        error={!!errors?.title}
      />
      <Stack>
        <Stack ml="auto">
          {onCancel && <Button onClick={handleCancel}>Cancel</Button>}
          <Button variant="contained" type="submit">
            {addButtonLabel}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TaskForm;
