import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  taskList: string[] = ["Do laundry", "Buy groceries", "Pass exams"]; // Holds the list of tasks

  // Add a new task to the taskList
  onAddTask(newTask: string) {
    this.taskList = [...this.taskList, newTask]; // Update the taskList immutably
  }
}