import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
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

  removeTask(id: number) {
    this.taskList = this.taskList.filter((x) => x.id != id);
  }

  onDoneChanged(task: Task) {
    if (task.isDone) {
      this.taskList = this.taskList.filter((x) => x.id != task.id);
      this.doneTaskList.push(task);
      this.doneTaskList.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.doneTaskList = this.doneTaskList.filter((x) => x.id != task.id);
      this.taskList.push(task);
      this.taskList.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  }
}
