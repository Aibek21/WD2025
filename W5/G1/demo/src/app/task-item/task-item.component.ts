import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<number>();
  @Output() done = new EventEmitter<Task>();


  removeTask() {
    this.remove.emit(this.task.id);
  }

  onDoneChanged() {
    console.log("onDoneChanged");
    this.done.emit(this.task);
  }
}
