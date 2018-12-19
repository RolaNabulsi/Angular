import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductArr = []
  name:string
  quantity:string
  price:string
  count=0;
  public rows: Array<{id:number, name: string, quantity: string, price: string}> = [];

  constructor() { }


  printValue(e)
  {
    this.count++;
    this.rows.push( {id: this.count, name: this.name, quantity: this.quantity, price: this.price } );
    this.name ="";
    this.price =null;
    this.quantity =null;
  }

  ngOnInit() {
  }

}
