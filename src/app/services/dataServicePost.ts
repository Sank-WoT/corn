import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Respondent } from '../class/respondent';
import { Effect } from '../class/effect';
import { Intervention } from '../class/intervention';
import { Preparation } from '../class/preparation';
import { ResultPost } from '../class/resultpost';
import { HttpErrorHandler, HandleError } from '../services/http-error.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ServerService {
	private handleError: HandleError;
	constructor(private http: HttpClient,  httpErrorHandler: HttpErrorHandler) { 
		this.handleError = httpErrorHandler.createHandleError('HeroesService');
	}

	setRespondent (respondent: Respondent): Observable<Respondent> {
		console.log(respondent);
    	return this.http.post<Respondent>("http://localhost:3000/apit", respondent, httpOptions)
    	.pipe(
    	);
	}

	setEffect (effect: Effect): Observable<Effect> {
		console.log(effect);
    	return this.http.post<Effect>("http://localhost:3000/api/effect/", effect, httpOptions)
    	.pipe(
    	);
	}

	setPreparation (preparation: Preparation[]): Observable<Preparation[]> {
		console.log(preparation);
    	return this.http.post<Preparation[]>("http://localhost:3000/api/preparation/", preparation, httpOptions)
    	.pipe(
    	);
	}  

	setIntervention (intervention: Intervention[]): Observable<Intervention[]> {
		console.log(intervention);
    	return this.http.post<Intervention[]>("http://localhost:3000/api/intervention/", intervention, httpOptions)
    	.pipe(
    	);
	}  

	setResult (result: ResultPost): Observable<ResultPost> {
		console.log(result);
    	return this.http.post<ResultPost>("http://localhost:3000/api/result/", ResultPost, httpOptions)
    	.pipe(
    	);
	} 
}

