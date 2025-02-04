import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My project';
  num = 15;
  numbers: number[];
  students: any[];
  isLoading: boolean = true;
  items: string[] = ["Item 1"];
  inputData: string = "";

  constructor() {
    this.numbers = [1, 5, 4, 6];
    this.students = [
      {
        "id": "20BD123123",
        "name": "Student 1",
        "gpa": "3.5"
      },
      {
        "id": "20BD123122",
        "name": "Student 2",
        "gpa": "3.7"
      },
      {
        "id": "20BD123121",
        "name": "Student 3",
        "gpa": "3.9"
      }
    ]
  }

  btnClick() {
    // if (this.isLoading)
    //   this.isLoading = false;
    // else
    //   this.isLoading = true;
    this.isLoading = !this.isLoading;
  }


  addItem() {
    this.items.push(this.inputData);
    this.inputData = "";
  }
}
