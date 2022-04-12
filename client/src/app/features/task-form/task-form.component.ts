import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask } from 'src/app/shared/models/task/task.model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  submittedForm: boolean = false;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      priority: [1, [Validators.required]],
      status: [1, [Validators.required]],
    });
  }

  ngOnInit() {}

  createTask() {
    this.submittedForm = true;
    if (this.taskForm.invalid) {
      return;
    }

    const values = this.taskForm.value;

    const data: ITask = {
      title: values.title,
      description: values.description,
      priority: +values.priority,
      status: +values.status,
    };

    debugger;
    this.taskService.createTask(data).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
        console.log('Task created successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get form() {
    return this.taskForm.controls;
  }

  invalidControl(controlName: string) {
    return (
      this.taskForm.get(controlName)?.invalid &&
      this.taskForm.get(controlName)?.touched
    );
  }
}
