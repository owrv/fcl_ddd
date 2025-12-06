import { describe, it, expect } from '@jest/globals';
import Order from '../../src/domain/entity/order';
import { ErrorOrder } from '../../src/core/errors/error-order.ts';
import { randomUUID } from 'crypto';

describe('Entidade do Pedido', () => {
    it('deve lançar um erro quando o pedido estiver vazio', () => {
        expect(() => {
            let myOrder = new Order(randomUUID(), []);
            expect(myOrder).toThrow(ErrorOrder.EmptyItems());
        })
    });

});