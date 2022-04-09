import { Module } from '@nestjs/common';
import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todos])
  ],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {}
