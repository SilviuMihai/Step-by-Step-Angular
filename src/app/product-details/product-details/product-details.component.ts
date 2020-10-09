import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
/* The ActivatedRoute is specific to each routed component that the Angular Router loads.
 It contains information about the route, its parameters, and additional data associated with the route.

By injecting the ActivatedRoute, you are configuring the component to use a service. 
The Managing Data page covers services in more detail. */