import {Dog} from './class/dog';
import {DogI} from './interface/dogi';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class DataService{
 	constructor(private http: HttpClient){ }
    url: string = "http://localhost:3000/api/get";
    getData(): Observable<DogI[]> {
    	console.log("GET")
        return this.http.get<DogI[]>(this.url);
    }
     errorHandler(error: HttpErrorResponse) {
    	return Observable.throw(error.message || "Server Error");    	
    }
}