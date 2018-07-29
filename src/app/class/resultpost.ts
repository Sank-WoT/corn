import { IResultPost } from "../interface/IResultPost";
export class ResultPost implements IResultPost {
	baseRationality: number;
	rationality: number;
	advantage: number;
	id: string;
	constructor(
	baseRationality: number,
	rationality: number,
	advantage: number
	){}

	resultBaseRationality(effect: number, utility: number, M: number) {
		this.baseRationality =  effect * utility * M;
	}
	
	resultRationality(Rb: number) {
		this.rationality =  1 / Rb;
	}

	resultAdvantage(Rb: number, F: number) {
		this.advantage = (Rb * F) / 2;
	}


	getBaseRationality(): number {
		return this.baseRationality;
	}

	getRationality(): number {
		return this.rationality;
	}

	getAdvantage(): number {
		return this.advantage;
	}
}