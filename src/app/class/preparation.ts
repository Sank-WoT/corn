import { IPreparation } from "../interface/IPreparation";
export class Preparation implements IPreparation {
	MNN: string;
	komerceName: string;
	valueApplicationPreparation: number;
	dose: number;
	maxValueApplicationPreparation: number;
	maxDose: number;
	price: number;
	valueInDose: number;
	valueInDoseDay: number;
	valueDoseInPack: number;
	constructor(
		MNN: string,
		komerceName: string,
		valueApplicationPreparation: number,
		dose: number,
		maxValueApplicationPreparation: number,
		maxDose: number,
		price: number,
		valueInDose: number,
		valueInDoseDay: number,
		valueDoseInPack: number,
	){
		this.MNN = MNN;
		this.komerceName = komerceName;
		this.valueApplicationPreparation = valueApplicationPreparation;
		this.dose = dose;
		this.maxValueApplicationPreparation = maxValueApplicationPreparation;
		this.maxDose = maxDose;
		this.price = price;
		this.valueInDose = valueInDose;
		this.valueInDoseDay = valueInDoseDay;
		this.valueDoseInPack = valueDoseInPack;
	}
}