import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    catchError,
    combineLatestWith,
    map,
    Observable,
    Observer,
    tap,
    throwError,
} from 'rxjs';
import { CategoryService } from './categories.service';
import { IProduct } from './product';
import { ProductListComponent } from './product-list.component';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private productUrl: string = `api/Products.json`;

    constructor(
        private http: HttpClient,
        private categoryService: CategoryService
    ) { }

    // Procedural Pattern => Declarative Pattern
    getProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            //tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    fun(){
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(numbers.filter((x) => x > 3));
    }

   
    products$ = this.http.get<IProduct[]>(this.productUrl).pipe(
        map((products) =>
            products.map(
                (product) =>
                ({
                    ...product,
                    Price: product.Price * 2,
                } as IProduct)
            )
        ),
        //tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );

    productsWithCategories$ = this.categoryService.categories$.pipe(
        combineLatestWith(this.products$),
        map(([categories, products]) =>
            products.map(
                (product) =>
                ({
                    ...product,
                    Category: categories.find((c) => product.categoryId == c.Id)?.Name,
                } as IProduct)
            )
        ),
        tap((data) => console.table(data)),
        catchError(this.handleError)
    );

  
    x$ = this.products$.pipe(
        combineLatestWith(this.categoryService.categories$),
        map(([ps, cs]) =>
            ps.map(p => ({
                ...p,
                Category: cs.find((c) => p.categoryId == c.Id)?.Name,
            }))
        )
    );

    handleError(err: HttpErrorResponse) {
        let message: string = '';
        if (err.error instanceof ErrorEvent) message = 'ClientSide';
        else message = 'Server Error';

        return throwError(() => message);
    }
}
