 export class Order {
    private company: string;
    private amount: number;
    private price: number;
    private type: string;

    constructor(company: string, amount: number, price: number, type: string) {
        if (amount <= 0 || price <= 0) {
            throw new Error("La cantidad y el precio deben ser mayores a 0.");
        }
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

    public reduceAmount(quantity: number): void {
        if (quantity > this.amount) {
            throw new Error("Cantidad a reducir mayor que la cantidad disponible.");
        }
        this.amount -= quantity;
    }
}