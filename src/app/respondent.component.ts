import { Component, OnInit} from '@angular/core';
import { Respondent } from './class/respondent';
import { DataServiceRespondent } from "./services/dataServiceRespondent";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ServerService } from "./services/dataServicePost";


@Component({
  selector: 'respondent',
  templateUrl: './respondent.component.html',
  styleUrls: ['./respondent.component.css'],
  providers: [DataServiceRespondent, ServerService]
})

export class RespondentComponent {
  constructor(private dataSetvice: DataServiceRespondent, private serverService: ServerService){
  }
  sexs = ['М', 'Ж'];
  sentShow = true;
  hidden: boolean = false;
  respondent: Respondent;
  get diagnostic() {return JSON.stringify(this.respondent);}


  ngOnInit() {
    this.respondent = this.dataSetvice.getData();
  }

  onSubmit() {
    console.log(this.respondent);
    this.serverService.setRespondent(this.respondent).subscribe(answer => {this.respondent.id = answer; console.log(this.respondent.id)});
  	this.hidden = true;
  	this.sentShow = false;
    this.dataSetvice.setData(this.respondent);
   }
}