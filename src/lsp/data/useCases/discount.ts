export abstract class Discount {
    abstract calculate(price:number):number;
}

export class FiftyDiscount extends Discount  {
    calculate(price: number): number {
        return price - price * 0.5
    }
}