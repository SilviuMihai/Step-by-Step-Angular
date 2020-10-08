import { Component, OnInit } from '@angular/core';
import { products } from '../../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listproducts = products;

  constructor() { }

  ngOnInit(): void {
  }

  share()
  {
    window.alert("The Phone has been shared !")
  }

}
