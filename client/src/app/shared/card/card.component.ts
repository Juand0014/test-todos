import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../models/task/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input('data') task: ITask;
  statusEnums: string[] = ["", "Open", "In Progress", "Closed"];
  priorityEnums: string[] = [ "", "Low", "Medium", "High"];

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
