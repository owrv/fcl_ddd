const { v4: uuid } = require("uuid");
import type { UUID } from "crypto";
import OrderItem from "./order_item.js";

export default class Order {
    _id: UUID;
    _customerId: UUID;
    _items: OrderItem[];
    
    constructor(customerId: UUID, items?: OrderItem[]) {
        this._id = uuid();
        this._customerId = customerId;
        this._items = items || [];
    }

    get items(): OrderItem[] {
        return this._items;
    }

    includeItem(item: OrderItem): void {
        this._items.push(item);
    }

    validate(): void {
        if(this._customerId === undefined || this._customerId === null) {
            throw new Error("O ID do cliente é inválido.");
        }
        if(!this._items || this._items.length === 0) {
            throw new Error("O pedido deve conter itens.");
        }
    }
}