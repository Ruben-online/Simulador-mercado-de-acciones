import { Order } from "./order";
import { MarketSimulator } from "./simulator";

const simulator = new MarketSimulator(10);

// Crear ordenes de compra y venta
const purchase1 = new Order("Empresa1", 100, 50, "compra");
const sales1 = new Order("Empresa1", 50, 40, "venta");

const purchase2 = new Order("Empresa1", 60, 45, "compra");
const sales2 = new Order("Empresa1", 70, 42, "venta");

// Agregar ordenes al simulador
simulator.addOrder(purchase1);
console.log("Orden de compra 1 agregada.");

simulator.addOrder(sales1);
console.log("Orden de venta 1 agregada.");

simulator.addOrder(purchase2);
console.log("Orden de compra 2 agregada.");

simulator.addOrder(sales2);
console.log("Orden de venta 2 agregada.");

// Mostrar el historial de transacciones
simulator.showTransactionHistory();