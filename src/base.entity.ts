import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

Entity();
export class baseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	createdAt?: Date;

	@Column({ nullable: true })
	updatedAt?: Date;
}