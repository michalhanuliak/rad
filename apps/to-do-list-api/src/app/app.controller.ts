import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  TaskDto,
  CreateTaskDto,
  UpdateTaskDto,
  ToDoListDto,
} from './to-do-list.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('to-do-list')
@Controller('to-do-list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ operationId: 'getToDoList' })
  @ApiOkResponse({
    description: 'To do list record',
    type: ToDoListDto,
  })
  @Get(':toDoListId')
  getToDoList(@Param('toDoListId') toDoListId: string) {
    return this.appService.getToDoList(Number(toDoListId));
  }

  @ApiOperation({ operationId: 'createToDoList' })
  @ApiOkResponse({
    description: 'Created to do list record',
    type: ToDoListDto,
  })
  @Post()
  createToDoList() {
    return this.appService.createToDoList();
  }

  @ApiOkResponse({
    description: 'Task record',
    type: TaskDto,
  })
  @ApiOperation({ operationId: 'getTask' })
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.appService.getTask(Number(taskId));
  }

  @ApiOkResponse({
    description: 'Created task record',
    type: TaskDto,
  })
  @ApiOperation({ operationId: 'createTask' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TaskDto,
  })
  @Post(':toDoListId')
  createTask(
    @Param('toDoListId') toDoListId: string,
    @Body() createdTask: CreateTaskDto
  ) {
    return this.appService.createTask(Number(toDoListId), createdTask);
  }

  @ApiOkResponse({
    description: 'Removed task record',
    type: TaskDto,
  })
  @ApiOperation({ operationId: 'removeTask' })
  @Delete('task/:taskId')
  removeTask(@Param('taskId') taskId: string) {
    return this.appService.removeTask(Number(taskId));
  }

  @ApiOkResponse({
    description: 'Updated task record',
    type: TaskDto,
  })
  @ApiOperation({ operationId: 'updateTask' })
  @Put('task/:taskId')
  updateTask(
    @Param('taskId') taskId: string,
    @Body() updatedTask: UpdateTaskDto
  ) {
    return this.appService.updateTask(Number(taskId), updatedTask);
  }
}
