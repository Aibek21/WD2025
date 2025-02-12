export class Task {
 static currentId: number = 1;
  id: number;
  title: string;
  isDone: boolean;

  constructor(title: string, isDone: boolean = false) {
    this.id = Task.currentId++;
    this.title = title;
    this.isDone = isDone
  }
}
