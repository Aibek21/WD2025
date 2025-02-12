import {Component} from '@angular/core';
import {Task} from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[] = [];
  doneTaskList: Task[] = [];
  task: Task;
  currentId: number = 1;

  constructor() {
    this.task = new Task("", false);
    // let newTask = new Task(1, 'Task 1', false);
    // this.taskList.push(newTask);
  }


  addTask() {
    this.taskList.push(this.task);
    this.task = new Task("", false);
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
