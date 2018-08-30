import { IRespondent } from "../interface/IRespondent";
export class Respondent implements IRespondent {
	id: string;
	region: string;
	settlemen: string;
	organization: string;
	sex: string;
	age: number;
	height: number;
	weight: number;
	constructor(
	region: string,
	settlemen: string,
	organization: string,
	sex: string,
	age: number,
	height: number,
	weight: number,
	){
		this.region = region;
		this.settlemen = settlemen;
		this.organization = organization;
		this.sex = sex;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}
}