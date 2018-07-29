import { IEffect } from "../interface/IEffect";
export class Effect implements IEffect {
	effect: number;
	oNeg: number;
	oPos: number;
	sNeg: number;
	sPos: number;
	valuePreparation: number;
	valueNoPreparation: number;
	id: string;
	constructor(
		effect: number,
		oNeg: number,
		oPos: number,
		sNeg: number,
		sPos: number,
		valuePreparation: number,
		valueNoPreparation: number
	){
		this.effect = effect;
		this.oNeg = oNeg;
		this.oPos = oPos;
		this.sNeg = sNeg;
		this.sPos = sPos;
		this.valuePreparation = valuePreparation;
		this.valueNoPreparation = valueNoPreparation;
	}
}