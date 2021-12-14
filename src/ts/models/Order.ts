import { Vacuum } from "./Vacuum";

export class Order {

    Vacuum: Vacuum;
    Amount: number;

    constructor(
        Vacuum: Vacuum,
        Amount: number
    ) 
    {
        this.Vacuum = Vacuum;
        this.Amount = Amount;
    }

    
}