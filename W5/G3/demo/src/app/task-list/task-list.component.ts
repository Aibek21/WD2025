import {Component} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taskList: Task[];
  doneTaskList: Task[];
  currentTask: Task;

  constructor() {
    this.taskList = [];
    this.doneTaskList = [];
    this.currentTask = new Task("");
  }

  addTask() {
    this.taskList.push(this.currentTask);
    this.currentTask = new Task("");
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((t) => t.id != id);
  }

  onDoneChanged(task: Task) {
    if (task.isDone) {
      this.taskList = this.taskList.filter((t) => t.id != task.id);
      this.doneTaskList.push(task);
      this.doneTaskList.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.doneTaskList = this.doneTaskList.filter((t) => t.id != task.id);
      this.taskList.push(task);
      this.taskList.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  }

}
