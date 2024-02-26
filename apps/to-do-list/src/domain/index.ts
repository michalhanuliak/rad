import { TaskDto } from '@rad/infrastructure';

export type Task = Pick<TaskDto, 'id' | 'title' | 'description'>;
