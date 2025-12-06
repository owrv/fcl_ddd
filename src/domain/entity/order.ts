import OrderItem from "./order_item.js";

export default class Order {
    _id: string;
    _customerId: number;
    _items: OrderItem[];
    
    constructor(id: string, customerId: number, items?: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items || [];
    }
}