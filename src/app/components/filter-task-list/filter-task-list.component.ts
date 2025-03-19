import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-filter-task-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter-task-list.component.html',
  styleUrl: './filter-task-list.component.css'
})
export class FilterTaskListComponent {
  @Output() filterTasks: EventEmitter<string> = new EventEmitter<string>();
  onSubmit(form: NgForm) {
    console.log(form.value.name);
    let name = form.value.name;
    this.filterTasks.emit(name);
    form.reset();
  }
}
