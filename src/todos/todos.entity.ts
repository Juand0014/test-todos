import { Entity, Column, PrimaryColumn } from "typeorm";
import { baseEntity } from "src/base.entity";

@Entity()
export class Todos extends baseEntity {

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	priority: string;

	@Column()
	status: string;
}