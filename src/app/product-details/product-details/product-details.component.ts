import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './../../products';
import { CartService } from './../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(private route: ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product)
  {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart !');
  }

}
/* The ActivatedRoute is specific to each routed component that the Angular Router loads.
 It contains information about the route, its parameters, and additional data associated with the route.

By injecting the ActivatedRoute, you are configuring the component to use a service. 
The Managing Data page covers services in more detail. */