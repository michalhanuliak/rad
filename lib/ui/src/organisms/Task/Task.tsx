import { getReadableDate } from '@rad/utils/date';
import { Button, Stack } from '../../atoms';
import { Checkbox } from '../../atoms';
import { Text } from '../../atoms';
import { TaskDto } from '@rad/infrastructure';
import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';

export interface TaskProps {
  title: string;
  description: string;
  date: Date;
  author: string;
  isChecked?: boolean;
  onRemove: () => void;
  onUpdate: (data: TaskDto) => void;
}

export function Task({
  title,
  description,
  date,
  author,
  isChecked,
  onRemove,
  onUpdate,
}: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (data: TaskDto) => {
    toggleEdit();
    onUpdate(data);
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleCheckbox = () => {
    onUpdate({ title, description, isCompleted: !isChecked });
  };

  if (isEditing) {
    return (
      <TaskForm
        onSubmit={handleUpdate}
        onCancel={toggleEdit}
        defaultValues={{ title, description }}
        addButtonLabel={isEditing ? 'Save' : 'Update'}
      />
    );
  }

  return (
    <Stack p="1.2rem 1.6rem" alignItems="center" justifyContent="start">
      <Checkbox size="medium" checked={isChecked} onChange={toggleCheckbox} />
      <Stack vertical>
        <Text variant="h3">{title}</Text>
        <Text variant="body1">{description}</Text>
        <Stack>
          <Text>{getReadableDate(date)}</Text>
          <Text>{author}</Text>
        </Stack>
        <Button onClick={() => toggleEdit()}>
          {isEditing ? 'Save' : 'Update'}
        </Button>
        <Button onClick={isEditing ? toggleEdit : onRemove}>
          {isEditing ? 'Cancel' : 'Remove'}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Task;
