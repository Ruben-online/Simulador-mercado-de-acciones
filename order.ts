 export class Order {
    private company: string;
    private amount: number;
    private price: number;
    private type: string;

    constructor(company: string, amount: number, price: number, type: string) {
        this.company = company;
        this.amount = amount;
        this.price = price;
        this.type = type;    
    }

    public getCompany(): string {
        return this.company
    }

    public getAmount(): number {
        return this.amount
    }

    public getPrice(): number {
        return this.price
    }

    public getType(): string {
        return this.type
    }
}