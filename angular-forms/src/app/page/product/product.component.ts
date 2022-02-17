import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
