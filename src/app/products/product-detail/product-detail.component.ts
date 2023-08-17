import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector : 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product!: IProduct[];
  
  productN!: any[];
  id: any;



  constructor(private route: ActivatedRoute, private prodService : ProductService,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.prodService.getProducts().subscribe(
      data=>{
        this.product=data;
      }
    )
  }

  getproductName()
  {
    this.productN=this.product;
    // this.productName = this.productName.filter(d=>d.productId==this.id?d.productName:'');
    console.log(this.productN);
    
  }


  onBack(): void {
    this.router.navigate(['/products']);
  }

}
