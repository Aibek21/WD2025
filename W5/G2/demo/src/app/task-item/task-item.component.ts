import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<number>();
  @Output() done = new EventEmitter<Task>();


  removeTask() {
    this.remove.emit(this.task.id);
  }

  onDoneChanged() {
    this.done.emit(this.task)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


}
