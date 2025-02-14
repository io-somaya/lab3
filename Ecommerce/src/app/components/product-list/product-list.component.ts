import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
// import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Array<Product> = [];
  limit = 10;
  skip = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    console.log("test");
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.limit, this.skip).subscribe((data: any) => {
      this.products = data.products;//access array in obj to loop
    });
  }

  viewDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }

  loadMore(): void {
    this.skip += this.limit;
    this.loadProducts();
  }
}