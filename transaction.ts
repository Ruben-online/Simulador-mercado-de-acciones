class Transaction {
    private company: string;
    private quantity: number;
    private price: number;
    private buyer: string;
    private seller: string;

    constructor(company: string, quantity: number, price: number, buyer: string, seller: string) {
        this.company = company;
        this.quantity = quantity;
        this.price = price;
        this.buyer = buyer;
        this.seller = seller;
    }

    public getCompany(): string {
        return this.company;
    }
    
    public getQuantity(): number {
        return this.quantity;
    }
    
    public getPrice(): number {
        return this.price;
    }
    
    public getBuyer(): string {
        return this.buyer;
    }
    
    public getSeller(): string {
        return this.seller;
    }
    
    public showTransaction(): void {
        console.log(`Transacción: ${this.quantity} acciones de ${this.company} a $${this.price} cada una, comprador: 
            ${this.buyer}, vendedor: ${this.seller}`);
    }
    
}