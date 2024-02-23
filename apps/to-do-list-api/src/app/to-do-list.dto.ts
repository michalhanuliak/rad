import { IsString } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;
}

export class CreateTaskDto extends OmitType(TaskDto, ['id'] as const) {}
