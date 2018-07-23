import { Preparation } from '../class/preparation';
import { Intervention } from '../class/intervention';
import { Effect } from '../class/effect';
import { Respondent } from '../class/respondent';
export interface IResult {
	baseRationality: number;
	rationality: number;
	advantage: number;
	id: number;
	effect: Effect;
	preparation: Preparation[];
	intervention: Intervention[];
	respondent: Respondent;
}