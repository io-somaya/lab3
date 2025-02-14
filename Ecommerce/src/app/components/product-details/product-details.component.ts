import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  Math = Math;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  @Input() id: string = '';//bec url send string

  ngOnInit(): void {
    const productId = Number(this.id)
    if(productId){
    this.productService
      .getProductDetails(productId)
      .subscribe((data) => (this.product = data));
    }
  }

  addToCart(): void {
    this.cartService.addItem(this.product);
  }
}