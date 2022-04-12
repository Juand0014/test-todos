import { Entity, Column,  } from "typeorm";
import { IsEnum, IsNotEmpty } from 'class-validator';
import { BaseEntity } from "../../BaseEntity";
import { PriorityEnum } from "../../enums/priority.enum";
import { StatusEnum } from "../../enums/status.enum";

@Entity()
export class Todos extends BaseEntity {

	@IsNotEmpty( { message: 'Title is required' } )
	@Column()
	title: string;

	@IsNotEmpty( { message: 'Description is required' } )
	@Column()
	description: string;

	@IsEnum(PriorityEnum)
	@IsNotEmpty( { message: 'Priority is required' } )
	@Column()
	priority: PriorityEnum;

	@IsEnum(StatusEnum)
	@IsNotEmpty( { message: 'Status is required' } )
	@Column()
	status: StatusEnum;
}