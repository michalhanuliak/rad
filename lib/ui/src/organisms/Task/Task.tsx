import { getReadableDate } from '@rad/utils/date';
import { Stack } from '../../atoms';
import { Checkbox } from '../../atoms';
import { Text } from '../../atoms';

export interface TaskProps {
  title: string;
  description: string;
  date: Date;
  author: string;
  isChecked?: boolean;
}

export function Task({
  title,
  description,
  date,
  author,
  isChecked,
}: TaskProps) {
  return (
    <Stack p="1.2rem 1.6rem" alignItems="center" justifyContent="start">
      <Checkbox size="medium" checked={isChecked} />
      <Stack vertical>
        <Text variant="h3">{title}</Text>
        <Text variant="body1">{description}</Text>
        <Stack>
          <Text>{getReadableDate(date)}</Text>
          <Text>{author}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Task;
