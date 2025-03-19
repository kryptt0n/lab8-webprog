import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() taskList: string[] = []; // Input for the task list
}