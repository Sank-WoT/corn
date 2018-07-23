import { Component} from '@angular/core';
import { Effect } from './class/effect';
import { PreparationComponent } from './preparation.component';
import { InterventionComponent } from './intervention.component';
import { ResultComponent } from './result.component';
import { DataServiceEffect } from './services/dataServiceEffect'

@Component({
  selector: 'effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css'],
  providers: [DataServiceEffect]
})

export class EffectComponent {
	constructor(private dataSetvice: DataServiceEffect){}
	sentHidden: boolean = true; 
	effects: Effect;
	profitable: boolean = true;
	get diagnostic() {return JSON.stringify(this.effects);}
	submitted = false;
	hidden: boolean = false;
	
	onSubmit() {
		this.hidden = true;
		this.sentHidden = false;
		this.submitted = true; 
	}

	onProfitable() {
		this.hidden = true;
		this.sentHidden = false; 
		this.profitable = false;
	}

	ngOnInit() {
	    this.effects = this.dataSetvice.getData();
  	}
}