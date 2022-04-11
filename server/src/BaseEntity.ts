import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

Entity();
export class BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	createdAt?: Date;

	@Column({ nullable: true })
	updatedAt?: Date;
}