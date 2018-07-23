import { Effect } from "../class/effect";
import { Injectable } from '@angular/core';
@Injectable()
export class DataServiceEffect {
	private dataEffect = new Effect(0,0,0,0,0,0,0);
	getData(): Effect {
		return this.dataEffect;
	}

	setData(Intervention) {
		this.dataEffect = Intervention;
	}
}
