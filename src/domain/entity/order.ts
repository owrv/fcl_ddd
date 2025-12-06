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
}