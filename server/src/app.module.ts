import { Module } from '@nestjs/common';
import { TodosModule } from './todos/modules/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TodosModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'todos',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),]
})
export class AppModule {}
