import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { FilterTaskListComponent } from "./components/filter-task-list/filter-task-list.component";
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, FilterTaskListComponent, AddTaskComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab8';
  
}