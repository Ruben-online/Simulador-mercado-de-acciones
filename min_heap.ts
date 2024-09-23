import { Order } from "./order"

class MinHeap {
    private heap: Order[];
    private n: number;

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }
    
    public insert(order: Order): void {
        this.n++;
        this.heap[this.n] = order;
        this.swim(this.n);
    }

    public extractMin(): Order | undefined {
        if (this.n === 0) return undefined;
        const min = this.heap[1];
        this.swap(1, this.n);
        this.n--;
        this.sink(1);
        return min;
    }

    private swim(k: number): void {
        while (k > 1 && this.heap[Math.floor(k / 2)].getPrice() > this.heap[k].getPrice()) {
            this.swap(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }
    
    private sink(k: number): void {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j < this.n && this.heap[j].getPrice() > this.heap[j + 1].getPrice()) j++;
            if (this.heap[k].getPrice() <= this.heap[j].getPrice()) break;
            this.swap(k, j);
            k = j;
        }
    }
    
    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}