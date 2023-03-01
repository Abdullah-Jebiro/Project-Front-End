import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, map, Observable, Observer, of, Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'amzn-product',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
  // changeDetection:ChangeDetectionStrategy.Default,
})

export class ProductListComponent implements OnInit ,OnDestroy {

imageWidth:number=50;
displayImage:boolean=false;
imagePath :string="assets/images/team-1.png";
products:IProduct[]=[];

filteredProducts:IProduct[]=this.products;
_listFilter:string="";
sub!: Subscription;
errorMessage: any;

constructor(private productService:ProductService){
}


productsWithCategories$=this.productService.productsWithCategories$.pipe( 
  catchError(err=>{
    this.errorMessage=err;
    return EMPTY;
  })
);

ngOnInit():void{

  this.sub=this.productService.getProduct()
  .subscribe({
  next:products=>{
    this.products = products;
    this.filteredProducts=this.products;
  }}); 
}

ngOnDestroy(): void {
    this.sub.unsubscribe();
}

public get listFilter():string{
  return this._listFilter;
}

public set listFilter(value:string){
  this._listFilter=value;
  this.filteredProducts=this.doFilter(value);
}



toggleImage():void{
this.displayImage=!this.displayImage;
}

onRatingClicked(message:string):void{
   this._listFilter=message;
}

 doFilter(filterBy:string): IProduct[] {
  return this.products.filter((product:IProduct)=>
  product.Product.toLocaleUpperCase().includes(filterBy.toLocaleUpperCase()));
 }
}


