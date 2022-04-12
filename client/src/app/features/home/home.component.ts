import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/models/task/task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks!: ITask[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
