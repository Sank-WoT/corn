import { IIntervention } from "../interface/IIntervention";
export class Intervention implements IIntervention {
	nameIntervention: string;
	kommerceNameIntervention: string;
	valueIntervention: number;
	refereceValueIntervention: number;
	price: number;
	priceReference: number;
	id: string;
	constructor(
		nameIntervention: string,
		kommerceNameIntervention: string,
		valueIntervention: number,
		refereceValueIntervention: number,
		price: number,
		priceReference: number
	){
		this.nameIntervention = nameIntervention;
		this.kommerceNameIntervention = kommerceNameIntervention;
		this.valueIntervention = valueIntervention;
		this.refereceValueIntervention = refereceValueIntervention;
		this.price = price;
		this.priceReference = priceReference;
	}
}