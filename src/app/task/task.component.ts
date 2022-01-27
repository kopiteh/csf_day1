import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textShow = false

  taskList = `Create a new component. Use String Interpolation`

  showText() {
    this.textShow=true
  }

  hideText() {
    this.textShow=false
  }

}
