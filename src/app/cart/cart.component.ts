import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartappleCount:any;
  @Output() cartOutput:EventEmitter<number>=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  removeApple(){
    this.cartOutput.emit(1)
  }

}
