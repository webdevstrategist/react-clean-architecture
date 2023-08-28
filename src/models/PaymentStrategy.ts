import { RoundUpStrategy } from "../types/roundup.type";

export const roundUpToNearestInteger:RoundUpStrategy = (amount:number) => {
    return Math.floor(amount + 1)
}

export const roundUpToNearestHundreds: RoundUpStrategy = (amount:number) => {
    return Math.floor(amount / 100 + 1) * 100
}


export class PaymentStrategy {
    private readonly _currencySign: string;
    private readonly algorithm: RoundUpStrategy;
  
    public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
      this._currencySign = currencySign;
      this.algorithm = roundUpAlgorithm;
    }
  
    get currencySign(): string {
      return this._currencySign;
    }
  
    getRoundUpAmount(amount: number): number {
      return this.algorithm(amount);
    }

    private calculateTipFor = (roundUpAmount:number) => (amount:number) => {
        return parseFloat((roundUpAmount - amount).toPrecision(10))
    }
  
    getTip(amount: number): number {
      return this.calculateTipFor(this.getRoundUpAmount(amount))(amount);
    }
}