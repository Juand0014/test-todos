/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { TodosController } from './todos.controller';

describe('TodosController', () => {
  let todosController: TodosController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ Test ],
      controllers: [ TodosController ],
      providers: [],
    }).compile();

    todosController = moduleRef.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(todosController).toBeDefined();
  });
});
