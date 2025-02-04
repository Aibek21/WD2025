import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [FormsModule]
})
export class AppComponent {
  title = 'Hello';
  num: number;
  numbers: number[];
  students: any[];

  isLoading: boolean;

  items: string[] = [];
  inputData: string = "";

  constructor() {
    console.log("constructor")
    this.num = 10;
    this.numbers = [5, 10, 3, 10];
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
    this.isLoading = false;
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
