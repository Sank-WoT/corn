import { Intervention } from "../class/intervention";
import { Injectable } from '@angular/core';
@Injectable()
export class DataServiceIntervention {
	private dataIntervention: Intervention[] = [];
	getData(): Intervention[] {
		return this.dataIntervention;
	}

	addData(Intervention) {
		this.dataIntervention.push(Intervention);
	}
}
