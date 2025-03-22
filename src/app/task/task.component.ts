import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { FilterTaskListComponent } from "../components/filter-task-list/filter-task-list.component";
import { AddTaskComponent } from '../components/add-task/add-task.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskListComponent, FilterTaskListComponent, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  taskList: string[] = ["Do laundry", "Buy groceries", "Pass exams"];
  filteredTasks: string[] = [...this.taskList];

  // Handle filtering tasks
  handleFilter(query: string) {
    if (query && query.length > 0) {
      this.filteredTasks = this.taskList.filter(task =>
        task.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredTasks = [...this.taskList]; // Reset to show all tasks
    }
  }

  // Add a new task to the taskList
  onAddTask(newTask: string) {
    this.taskList = [...this.taskList, newTask];
    this.filteredTasks = [...this.taskList]; // Update filteredTasks to include the new task
  }
}
