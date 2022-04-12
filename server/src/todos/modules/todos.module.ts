import { Module } from '@nestjs/common';
import { TodosService } from '../services/todos.service';
import { TodosController } from '../controllers/todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from '../entity/todos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todos])
  ],
  providers: [TodosService],
  exports: [TodosService],
  controllers: [TodosController],

})
export class TodosModule {}
