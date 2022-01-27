import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup = <FormGroup>{};
  todoArray: FormArray = <FormArray>{};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoArray = this.fb.array([])
    this.todoForm = this.fb.group({todos:this.todoArray})
  }

  processForm(){

  }

}
