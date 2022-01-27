import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  rsvpForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rsvpForm = this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control(""),
      phone: this.fb.control(""),
      attending: this.fb.control(""),

    })
  }

  checkValue: any;

  processForm(){
    const rsvp = this.rsvpForm.value.email
    this.checkValue = rsvp
  }


}
