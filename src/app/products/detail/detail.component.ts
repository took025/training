import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductService } from '../home/product.service';
import { IProduct } from '../home/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private productService: ProductService,
               private router: Router) { }
  product: IProduct;
  ngOnInit() {
    // tslint:disable-next-line: ban-types
    const id: Number = Number(this.route.snapshot.params.id);
    this.product = this.productService.products.find(a => a.productId === id);
  }
  onBack(): void {
    this.router.navigate(['./home'] , { queryParams: {title: this.product.productName}});
  }
}
