import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../models/task/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input('data') task: ITask;

  constructor() {
    this.task = {
      title: '',
      description: '',
      priority: 0,
      status: 0,
    };
  }

  ngOnInit() {}
}
