import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from '../entity/todos.entity';
import { PriorityEnum } from 'src/enums/priority.enum';
import { StatusEnum } from 'src/enums/status.enum';

@Injectable()
export class TodosService {
	constructor(
		@InjectRepository(Todos)
		private todosRepository: Repository<Todos>
	) {}

	async findAll(): Promise<Todos[]> {
		return await this.todosRepository.find();
	}

	async findOne(id: number): Promise<Todos> {
		return await this.todosRepository.findOne(id);
	}

	async create(todos: Todos): Promise<Todos> {
		return await this.todosRepository.save(todos);
	}

	async update(id: number, todos: Todos): Promise<UpdateResult> {
		return await this.todosRepository.update(id, todos);
	}

	async delete(id: number): Promise<DeleteResult> {
		return await this.todosRepository.delete(id);
	}

	async deleteAll(): Promise<DeleteResult> {
		return await this.todosRepository.delete({});
	}

	async findByTitle(title: string): Promise<Todos[]> {
		return await this.todosRepository.find({ title });
	}

	async findByDescription(description: string): Promise<Todos[]> {
		return await this.todosRepository.find({ description });
	}

	async findByPriority(priority: PriorityEnum): Promise<Todos[]> {
		return await this.todosRepository.find({ priority });
	}

	async findByStatus(status: StatusEnum): Promise<Todos[]> {
		return await this.todosRepository.find({ status });
	}

	async findByTitleAndDescription(title: string, description: string): Promise<Todos[]> {
		return await this.todosRepository.find({ title, description });
	}

	async findByTitleAndPriority(title: string, priority: PriorityEnum): Promise<Todos[]> {
		return await this.todosRepository.find({ title, priority });
	}
}
