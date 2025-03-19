import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  newTask: Task = { id: 0, title: '', description: '' }; 

  @Output() addTask = new EventEmitter<Task>(); 

  onAddTask() {
    if (this.newTask.title && this.newTask.description) {
      this.newTask.id = Date.now(); 
      this.addTask.emit(this.newTask);
      this.newTask = { id: 0, title: '', description: '' }; 
    }
  }
}