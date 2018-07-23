import { Component, Input, ViewChild} from '@angular/core';
import { Intervention } from './class/intervention';
import { DataServiceIntervention } from './services/dataServiceIntervention'
import { ResultComponent } from './result.component';


@Component({
  selector: 'intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css'],
  providers: [DataServiceIntervention]
})

export class InterventionComponent {
   @ViewChild(ResultComponent) childComponent: ResultComponent
  constructor(private dataSetvice: DataServiceIntervention){}
  callChild(){
    this.childComponent.resultVal();
  }
	@Input() profitable: boolean;
	@Input() valueIntervention1: number;
	sentHidden: boolean = true; 
	hidden: boolean = false;
	hiddenButton: boolean = true;
	allIntervention: Intervention[] = [];
	intervention = new Intervention("", "", 0, 0, 0, 0);
	submitted = false;
	get diagnostic() {return JSON.stringify(this.allIntervention);}

	onSubmit() { 
	this.valueIntervention1 --;
    if ( 0 < this.valueIntervention1 ) {
      this.dataSetvice.addData(this.intervention);
      this.intervention = new Intervention("", "", 0, 0, 0, 0);
    } else {
      this.dataSetvice.addData(this.intervention);
      this.hidden = true;
      this.sentHidden = false;
      this.callChild();
    }
  }

  ngOnInit() {
    this.allIntervention = this.dataSetvice.getData();
  }
}