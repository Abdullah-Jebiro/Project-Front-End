import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './Shared/convert-to-space.pipe';
import { StarComponent } from './Shared/star.component';
import { ToFixed } from './Shared/to-fixed.pipe';
import { HttpClientModule } from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    ToFixed,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'Home' , component: HomeComponent},
      {path:'products' , component:ProductListComponent},
      {path:'product/:id' , component: ProductDetailComponent},
      {path:'' ,redirectTo:'Home' , pathMatch:'full'},
      {path:'**' ,redirectTo:'Home' , pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
