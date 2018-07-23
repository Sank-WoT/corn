import { IResult } from "../interface/IResult";
import { Preparation } from '../class/preparation';
import { Respondent } from '../class/respondent';
import { Intervention } from '../class/intervention';
import { Effect } from '../class/effect';
export class Result implements IResult {
	baseRationality: number;
	rationality: number;
	advantage: number;
	id: number;
	effect: Effect;
	intervention: Intervention[];
	preparation: Preparation[];
	respondent: Respondent;

	constructor(
		baseRationality: number,
		rationality: number,
		advantage: number
	){
		this.baseRationality = baseRationality;
		this.rationality = rationality;
		this.advantage = advantage;
	}
}