import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, Observer, tap, throwError } from "rxjs";
import { ICategory } from "./categories";



    @Injectable(
        {
            providedIn:"root"
        }
    )

    export class CategoryService{
    private   CategoryUrl:string = `api/category.json`;

    constructor(private http: HttpClient){

    }

    categories$ =this.http.get<ICategory[]>(this.CategoryUrl).pipe(     
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError));
    


    handleError(err:HttpErrorResponse){
        let message:string =''
        if(err.error instanceof ErrorEvent)
        message='ClientSide';
        else
        message ='Server Error';

        return throwError(()=>message);
        

    }
}

