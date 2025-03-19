import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
<<<<<<< HEAD
import {FilterTaskListComponent} from "./components/filter-task-list/filter-task-list.component";
=======
import { AddTaskComponent } from './components/add-task/add-task.component';
>>>>>>> add-task

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, FilterTaskListComponent],
=======
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, AddTaskComponent],
>>>>>>> add-task
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
<<<<<<< HEAD
  title = 'lab8';
  taskList = ["Do laundry", "Buy groceries", "Pass exams"];
  filteredTasks = [...this.taskList];

  handleFilter(query: string) {
    if (query && query.length > 0) {
      this.filteredTasks = this.taskList.filter(task =>
        task.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredTasks = [...this.taskList];
    }

  }
}
=======
  taskList: string[] = ["Do laundry", "Buy groceries", "Pass exams"]; // Holds the list of tasks

  // Add a new task to the taskList
  onAddTask(newTask: string) {
    this.taskList = [...this.taskList, newTask]; // Update the taskList immutably
  }
}
>>>>>>> add-task
