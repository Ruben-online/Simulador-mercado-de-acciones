import { Order } from "./order";
import { MaxHeap } from "./max_heap";
import { MinHeap } from "./min_heap";
import { Transaction } from "./transaction";

export class MarketSimulator {
    private purchases: MaxHeap;
    private sales: MinHeap;
    private transactionhistory: Transaction[];

    constructor(size: number) {
        this.purchases = new MaxHeap(size);
        this.sales = new MinHeap(size);
        this.transactionhistory = [];
    }

    public addOrder(order: Order): void {
        if (order.getAmount() <= 0 || order.getPrice() <= 0) {
            console.error("La cantidad y el precio deben ser positivos.");
            return;
        }

        if (order.getType() === "compra") {
            this.purchases.insert(order);
        } else if (order.getType() === "venta") {
            this.sales.insert(order);
        } else {
            console.error(`Tipo de orden no valido: ${order.getType()}. La orden es: ${JSON.stringify(order)}`);
            return;
        }

        this.matchOrders();
    }

    private matchOrders(): void {
        let buyOrder = this.purchases.peekMax();  
        let sellOrder = this.sales.peekMin();     

        // Verifica que ambas ordenes existan
        while (buyOrder !== undefined && sellOrder !== undefined) {
            // Funciona solo si el precio de compra es mayor o igual al de venta
            if (buyOrder.getPrice() >= sellOrder.getPrice()) {

                // Extrae las ordenes 
                buyOrder = this.purchases.extractMax();
                sellOrder = this.sales.extractMin();

                if (buyOrder === undefined || sellOrder === undefined) {
                    break;
                }

                const transactionAmount = Math.min(buyOrder.getAmount(), sellOrder.getAmount());
                const transactionPrice = sellOrder.getPrice(); 

                // Registrar la transaccion
                const transaction = new Transaction(buyOrder.getCompany(), transactionAmount, transactionPrice, "Comprador", "Vendedor");
                this.transactionhistory.push(transaction);

                // Reducir las cantidades
                buyOrder.reduceAmount(transactionAmount);
                sellOrder.reduceAmount(transactionAmount);

                // Si queda remanente en las ordenes, reinserta 
                if (buyOrder.getAmount() > 0) {
                    this.purchases.insert(buyOrder);
                }
                if (sellOrder.getAmount() > 0) {
                    this.sales.insert(sellOrder);
                }

            } else {
                break;
            }

            // Verificar las siguientes ordenes 
            buyOrder = this.purchases.peekMax();
            sellOrder = this.sales.peekMin();
        }
    }

    public showTransactionHistory(): void {
        if (this.transactionhistory.length === 0) {
            console.log("No se han registrado transacciones.");
            return;
        }

        this.transactionhistory.forEach(transaction => transaction.showTransaction());
    }
}
