import { describe, it, expect } from '@jest/globals';
import Order from '../../src/domain/entity/order';
import { ErrorOrder } from '../../src/core/errors/error-order.ts';

describe('Entidade do Pedido', () => {
    it('deve lançar um erro quando o pedido estiver vazio', () => {
        expect(() => {
            let myOrder = new Order(1, []);
            expect(myOrder).toThrow(ErrorOrder.EmptyItems());
        })
    });
});