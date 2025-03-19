import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for ngModel
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  newTask: string = ''; // Holds the new task string

  @Output() addTask = new EventEmitter<string>(); // Emits the new task

  // Emit the new task when the form is submitted
  onAddTask() {
    if (this.newTask) {
      this.addTask.emit(this.newTask);
      this.newTask = ''; // Reset the form
    }
  }
}