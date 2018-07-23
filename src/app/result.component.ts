import { Component} from '@angular/core';
import { Result } from './class/resultRationality';
import { Preparation } from './class/preparation';
import { Intervention } from './class/intervention';
import { Effect } from './class/effect';
import { Respondent } from './class/respondent';
import { DataServicePreparation } from './services/dataServicePreparation';
import { DataServiceIntervention } from './services/dataServiceIntervention';
import { DataServiceEffect } from './services/dataServiceEffect';
import { DataServiceResult } from './services/dataServiceResult'
import { DataServiceRespondent } from './services/dataServiceRespondent'
import { ServerService } from "./services/dataServicePost";
import { ResultPost } from "./class/resultpost"
 
@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})

export class ResultComponent {
	// init data
	Info: number = 0;
	M: number = 0;
	IM: number = 0;
	frugality: number = 0;
	F: number = 0;
	FAll: number = 0;
	hidden: boolean = true;
	result = new Result(0, 0, 0);
	allPreparation: Preparation[] = [];
	allIntervention: Intervention[] = [];
	respondent: Respondent;
	res = new ResultPost(0, 0, 0);
	effect: Effect;
	utility: number = 0;

	get diagnostic() {return JSON.stringify(this.result);}
	constructor( private dataServiceEffect: DataServiceEffect, 
		private dataServicePreparation: DataServicePreparation, 
		private dataServiceIntervention: DataServiceIntervention, 
		private dataServiceRespondent: DataServiceRespondent,
		private serverService: ServerService,
		) {
	}
	
	ngOnInit() {
		this.allPreparation = this.dataServicePreparation.getData();
		this.allIntervention = this.dataServiceIntervention.getData();
		this.effect = this.dataServiceEffect.getData();
		this.respondent = this.dataServiceRespondent.getData();
	}

	resultVal() {
		//alculation
		this.resultSumOnPreparation();
		this.resultSumOnIntervention();
		this.utility = this.resultUtility(this.effect.oNeg, this.effect.sNeg, this.effect.oPos, this.effect.sPos);
		this.IM = this.resultIM(this.Info, this.M);
		this.FAll = this.resultFAll(this.F, this.frugality);
		this.res.resultBaseRationality(this.effect.effect, this.utility, this.M);
		this.res.resultAdvantage(this.res.baseRationality, this.FAll);
		this.res.resultRationality(this.result.baseRationality);
		this.Info /= this.resultMed(this.Info, this.allPreparation.length);
		this.frugality /= this.resultMed(this.frugality, this.allPreparation.length);
		this.M /= this.resultMed(this.M, this.allPreparation.length);
		this.F /= this.resultMed(this.F, this.allPreparation.length);
		this.report();
		this.sendOnServer();
	}

	sendOnServer() {
		this.serverService.setEffect(this.effect).subscribe(respondent => console.log(this.effect));
		this.serverService.setPreparation(this.allPreparation).subscribe(respondent => console.log(this.allPreparation));
		this.serverService.setIntervention(this.allIntervention).subscribe(respondent => console.log(this.allIntervention));
		this.serverService.setResult(this.res).subscribe(respondent => console.log(this.res));
	}

	report() {
		// object save for send on server
		this.result.effect = this.effect;
		this.result.intervention = this.allIntervention;
		this.result.preparation = this.allPreparation;
		this.result.respondent = this.respondent;
		console.log(this.result);
	}

	resultSumOnPreparation() {
		for (var i = 0; i < this.allPreparation.length; ++i) {
			this.Info += (this.allPreparation[i].valueApplicationPreparation * this.allPreparation[i].dose) / (this.allPreparation[i].maxValueApplicationPreparation * this.allPreparation[i].maxDose);
			this.frugality += (this.allPreparation[i].price * this.allPreparation[i].valueInDose) / (this.allPreparation[i].dose * this.allPreparation[i].valueInDoseDay);
		}
	}

	resultSumOnIntervention() {
		for (var i = 0; i < this.allIntervention.length; ++i) {
			this.M += this.allIntervention[i].valueIntervention / this.allIntervention[i].refereceValueIntervention;
			this.F += this.allIntervention[i].price / this.allIntervention[i].priceReference;
		}
	}

	resultFAll(F: number, frugality: number): number {
		return F * frugality; 
	}

	resultIM(Info: number, M: number): number {
		return Info * M;
	}

	resultUtility(oNeg: number, sNeg: number, oPos: number, sPos: number): number {
		return ( 1 + oNeg + sNeg) /  ( 1 + oPos + sPos);
	}

	resultMed(Sum: number, lenght: number): number {
		return Sum / lenght;
	}
}