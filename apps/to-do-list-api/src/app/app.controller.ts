import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto, CreateTaskDto } from './to-do-list.dto';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('to-do-list')
@Controller('to-do-list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ operationId: 'getToDoLists' })
  @Get()
  getToDoLists() {
    return this.appService.getToDoList();
  }

  @ApiOperation({ operationId: 'createToDoList' })
  @Post()
  createToDoList() {
    return this.appService.createToDoList();
  }

  @ApiOperation({ operationId: 'getTask' })
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.appService.getTask(Number(taskId));
  }

  @ApiOperation({ operationId: 'createTask' })
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
