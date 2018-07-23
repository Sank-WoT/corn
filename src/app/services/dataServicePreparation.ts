import { Preparation } from "../class/preparation";
import { Injectable } from '@angular/core';
@Injectable()
export class DataServicePreparation {
	private dataPreparation: Preparation[] = [];
	getData(): Preparation[] {
		return this.dataPreparation;
	}

	addData(preparation) {
		this.dataPreparation.push(preparation);
	}
}
