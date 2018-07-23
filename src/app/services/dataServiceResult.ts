import { Injectable } from '@angular/core';

export class DataServiceResult {

	resultFAll(F: number, frugality: number): number {
		return F * frugality; 
	}

	resultRb(effect: number, utility: number, M: number): number {
		return  effect * utility * M;
	}

	resultIM(Info: number, M: number): number {
		return Info * M;
	}

	resultAdvantage(Rb: number, F: number): number {
		return  (Rb * F) / 2;
	}

	resultR( Rb: number): number {
		return  1 / Rb;
	}
}
