export interface ITask {
	title: string;
	description: string;
	priority: number;
	status: number;
	createdAt?: Date;
	updatedAt?: Date;
}