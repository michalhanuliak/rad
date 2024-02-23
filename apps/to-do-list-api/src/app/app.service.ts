import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { CreateTaskDto } from './to-do-list.dto';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  public getToDoList() {
    this.logger.log('Getting to-do list');
    return prisma.toDoList.findMany({
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
}
