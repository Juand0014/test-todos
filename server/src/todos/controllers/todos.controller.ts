import { Controller, Get } from '@nestjs/common';
import { Todos } from '../entity/todos.entity';
import { TodosService } from '../services/todos.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodosController {
	constructor(private todoService: TodosService) {}

	@Get()
	index(): Promise<Todos[]> {
		return this.todoService.findAll();
	}

	@Post('create')
	async create(@Body() todoData: Todos): Promise<Todos> {
		todoData.createdAt = new Date();
		return await this.todoService.create(todoData);
	}

	@Get(':title')
	async findByTitle(@Param('title') title: string): Promise<Todos[]> {
		return await this.todoService.findByTitle(title);
	}

	@Get(':Property/:Value')
	async findByAnyProperty(
		@Param('Property') 
		property: string,
		@Param('Value') 
		value: string): Promise<Todos[]> {
		return await this.todoService.findByAnyProperty(property, value);
	}

	@Delete(':id')
	async delete(@Param('id') id: number): Promise<DeleteResult> {
		let result = await this.todoService.delete(id);
		return result
	}

	@Put(':id')
	async update(@Param('id') id: number, @Body() todoData: Todos): Promise<UpdateResult> {
		todoData.updatedAt = new Date();
		return await this.todoService.update(id, todoData);
	}
}