import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

Entity();
export class baseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	createdAt?: Date;

	@Column({ nullable: true })
	updatedAt?: Date;

	@Column({ nullable: true })
	deletedAt?: Date;

	@Column({ nullable: true })
	createdBy?: string;

	@Column({ nullable: true })
	updatedBy?: string;

	@Column({ nullable: true })
	deletedBy?: string;
}