import { Controller, Get } from '@nestjs/common';
import { Todos } from '../todos.entity';
import { TodosService } from './todos.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('todos')
export class TodosController {
	constructor(private contactService: TodosService) {}

	@Get()
	index(): Promise<Todos[]> {
		return this.contactService.findAll();
	}

	@Post('create')
	async create(@Body() todoData: Todos): Promise<Todos> {
		todoData.createdAt = new Date();
		return await this.contactService.create(todoData);
	}

}
