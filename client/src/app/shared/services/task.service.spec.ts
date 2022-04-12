import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
import { ITask } from '../models/task/task.model';
import { TaskService } from './task.service';

describe('TaskService', () => {
	let service: TaskService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [TaskService]
		});
		service = TestBed.get(TaskService);
	});

	it('can load instance', () => {
		expect(service).toBeTruthy();
	});

	describe('createTask', () => {
		it('makes expected calls', () => {
			const httpTestingController = TestBed.get(HttpTestingController);
			const iTaskStub: ITask = <any>{};
			service.createTask(iTaskStub).subscribe(res => {
				expect(res).toEqual(iTaskStub);
			});
			const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
			expect(req.request.method).toEqual('POST');
			req.flush(iTaskStub);
			httpTestingController.verify();
		});
	});

	describe('updateTask', () => {
		it('makes expected calls', () => {
			const httpTestingController = TestBed.get(HttpTestingController);
			const iTaskStub: ITask = <any>{};
			service.updateTask(iTaskStub).subscribe(res => {
				expect(res).toEqual(iTaskStub);
			});
			const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
			expect(req.request.method).toEqual('PUT');
			req.flush(iTaskStub);
			httpTestingController.verify();
		});
	});
});
