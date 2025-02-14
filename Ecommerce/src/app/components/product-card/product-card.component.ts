import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterLink,DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;
  Math = Math; // Ask ????

}
