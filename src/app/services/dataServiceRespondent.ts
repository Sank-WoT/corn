import { Respondent } from "../class/respondent";
import { Injectable } from '@angular/core';
@Injectable()
export class DataServiceRespondent {
	private respondent: Respondent = new Respondent("", "", "", "Male", 0, 0, 0);
	getData(): Respondent {
		return this.respondent;
	}

	setData(dataRespondent: Respondent) {
		this.respondent = dataRespondent;
	}
}
