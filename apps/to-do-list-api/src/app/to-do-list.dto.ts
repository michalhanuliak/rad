import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

export class ToDoListDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  tasks: TaskDto[];
}

export class TaskDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  listId: number;
}

export class CreateTaskDto extends PickType(TaskDto, [
  'title',
  'description',
] as const) {}

export class UpdateTaskDto extends PickType(TaskDto, [
  'title',
  'description',
  'isCompleted',
] as const) {}
