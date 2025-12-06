const { v4: uuid } = require("uuid");
import type { UUID } from "crypto";
import OrderItem from "./order_item.js";

export default class Order {
    _id: UUID;
    _customerId: number;
    _items: OrderItem[];
    
    constructor(customerId: number, items?: OrderItem[]) {
        this._id = uuid();
        this._customerId = customerId;
        this._items = items || [];
    }
}