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
    port: string;
    ip: string;
	constructor(private http: HttpClient,  httpErrorHandler: HttpErrorHandler) { 
        this.port = "3000";
        this.ip = "localhost";
		this.handleError = httpErrorHandler.createHandleError('HeroesService');
	}

	setRespondent (respondent: Respondent): Observable<string> {
    	return this.http.post<string>("http://" + this.ip + ":" + this.port + "/apit", respondent, httpOptions)
    	.pipe(
    	);
	}

	setEffect (effect: Effect): Observable<Effect> {
		console.log(effect);
    	return this.http.post<Effect>("http://" + this.ip + ":" + this.port + "/api/effect/", effect, httpOptions)
    	.pipe(
    	);
	}

	setPreparation (preparation: Preparation[]): Observable<Preparation[]> {
		console.log(preparation);
    	return this.http.post<Preparation[]>("http://" + this.ip + ":" + this.port + "/api/preparation/", preparation, httpOptions)
    	.pipe(
    	);
	}  

	setIntervention (intervention: Intervention[]): Observable<Intervention[]> {
		console.log(intervention);
    	return this.http.post<Intervention[]>("http://"  + this.ip + ":" + this.port + "/api/intervention/", intervention, httpOptions)
    	.pipe(
    	);
	}  

	setResult (result: ResultPost): Observable<ResultPost> {
		console.log(result);
    	return this.http.post<ResultPost>("http://" + this.ip  + ":" + this.port + "/api/res", result, httpOptions)
    	.pipe(
    	);
	} 
}

