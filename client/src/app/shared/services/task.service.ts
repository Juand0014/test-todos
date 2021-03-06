import{ HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITask } from '../models/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient){
  }
  
  getTasks() {
    return this.http.get<ITask[]>(`${environment.url}todos`);
  }

  createTask(task: ITask) {
    return this.http.post<ITask>(`${environment.url}todos/create`, task);
  }
  
  updateTask(task: ITask) {
    return this.http.put<ITask>(`${environment.url}todos/update`, task);
  }

  filterTaskByAnyProperty(property: string, value: string) {
    return this.http.get<ITask[]>(`${environment.url}todos/getForAnyProperty/${property}/${value}`);
  }
}
