import { Component, Input, OnInit} from '@angular/core';
import { Preparation } from './class/preparation';
import { DataServicePreparation } from './services/dataServicePreparation';

@Component({
  selector: 'preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css'], 
  providers: [DataServicePreparation]
})

export class PreparationComponent implements OnInit {
  @Input() valuePreparation: number;
  @Input() profitable: boolean;
  @Input() valueIntervention1: boolean;
  allPreparation: Preparation[] = [];
  hidden: boolean = false;
  sentHidden: boolean = true; 
  constructor(private dataSetvice: DataServicePreparation){}
  preparation = new Preparation("", "", 0,0,0,0,0,0,0,0);
  get diagnostic() {return JSON.stringify(this.allPreparation);}
  submitted = false;
  onSubmit() { 
    this.valuePreparation --;
    if ( 0 < this.valuePreparation ) {
      this.dataSetvice.addData(this.preparation);
      this.preparation = new Preparation("", "", 0,0,0,0,0,0,0,0);
    } else {
      this.dataSetvice.addData(this.preparation);
      this.hidden = true;
      this.sentHidden = false;
    }
  }
  ngOnInit() {
    this.allPreparation = this.dataSetvice.getData();
  }
}