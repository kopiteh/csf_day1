import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart';
  carts = [];
  appleCount = 0;

  isUnchanged = true;

  constructor() {
    //setTimeout( () => {this.isUnchanged=false},2000);
  }

  useChildOutput(value_from_child:number){
    this.appleCount = this.appleCount + value_from_child
  }

  removeAppleFromCart(value_from_cart:number){
    this.appleCount = 0;
  }



}
