import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto, CreateTaskDto } from './to-do-list.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('to-do-list')
@Controller('to-do-list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getToDoLists() {
    return this.appService.getToDoList();
  }

  @Post()
  createToDoList() {
    return this.appService.createToDoList();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.appService.getTask(Number(taskId));
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TaskDto,
  })
  @Post(':toDoListId')
  createTask(
    @Param('toDoListId') toDoListId: string,
    @Body() createTaskDto: CreateTaskDto
  ) {
    return this.appService.createTask(Number(toDoListId), createTaskDto);
  }
}
