import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './to-do-list.dto';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  public getToDoList(toDoListId: number) {
    this.logger.log('Getting to-do list');
    return prisma.toDoList.findFirstOrThrow({
      where: {
        id: toDoListId,
      },
      include: {
        tasks: true,
      },
    });
  }

  public createToDoList() {
    this.logger.log('Creating to-do list');
    return prisma.toDoList.create({
      data: {
        title: 'To Do List',
      },
    });
  }

  public getTask(toDoListId: number) {
    this.logger.log('Getting task');
    return prisma.task.findMany({
      where: {
        listId: toDoListId,
      },
    });
  }

  public createTask(toDoListId: number, task: CreateTaskDto) {
    this.logger.log('Creating task');
    return prisma.task.create({
      data: {
        ...task,
        listId: toDoListId,
      },
    });
  }

  public removeTask(taskId: number) {
    this.logger.log('Removing task');
    return prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  public async updateTask(taskId: number, task: UpdateTaskDto) {
    this.logger.log('Updating task');

    return prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        ...task,
      },
    });
  }
}
