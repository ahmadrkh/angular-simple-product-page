import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ChangeDetectorRef,
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, HeaderComponent, ProductComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: any;
  readonly panelOpenState = signal(false);

  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.productService.productList().subscribe((data: any) => {
      console.log(data);
      this.products = data.products;
      this.cdr.markForCheck(); // Notify Angular of the change
    });
  }

  trackByProductId(index: number, product: any): number {
    return product.id; // Use product ID for tracking
  }

  title = 'product-Page';
}
