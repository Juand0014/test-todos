import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITask } from 'src/app/shared/models/task/task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks!: ITask[];
  filterForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.filterForm = this.fb.group({
      property: [''],
      value: ['']
    });
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data
      },
      error: (err) => {
        console.log(err);
      }
    }) 
  }

  onSearch() {
    const { property, value } = this.filterForm.value;
    this.taskService.filterTaskByAnyProperty(property, value).subscribe({
      next: (data) => {
        this.tasks = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onClear() {
    this.filterForm.reset();
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data
      },
      error: (err) => {
        console.log(err);
      }
    }) 
  }
}
