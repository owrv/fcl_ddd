const { v4: uuid } = require("uuid");
import type { UUID } from "crypto";
import OrderItem from "./order_item.js";
import { ErrorOrder } from "../../core/errors/error-order.ts";

export default class Order {
    _id: UUID;
    _customerId: UUID;
    _items: OrderItem[];
    
    constructor(customerId: UUID, items?: OrderItem[]) {
        this._id = uuid();
        this._customerId = customerId;
        this._items = items || [];
        this.validate();
    }

    get items(): OrderItem[] {
        return this._items;
    }

    includeItem(item: OrderItem): void {
        this.validate();
        this._items.push(item);
    }

    validate(): void {
        if(this._customerId === undefined || this._customerId === null) {
            throw ErrorOrder.InvalidCustomerId();
        }
        if(!this._items || this._items.length === 0) {
            throw ErrorOrder.EmptyItems();
        }
    }
}