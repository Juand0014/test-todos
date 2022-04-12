export interface ITask {
	title: string;
	description: string;
	priority: number;
	status: number;
	createAt?: number;
	updateAt?: number;
}