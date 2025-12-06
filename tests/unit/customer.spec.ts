import { describe, it, expect } from '@jest/globals';
import Customer  from '../../src/domain/entity/customer.ts';
import { ErrorCustomer } from '../../src/core/errors/error-customer.ts';


describe('Entidade do Cliente', () => {
    it('deve lançar um erro quando o nome estiver vazio', () => {
        expect(() => {
            let myCustomer = new Customer('', '123 Main St');
            expect(myCustomer).toThrow(ErrorCustomer.EmptyName());
        })
    });

    it('deve mudar de nome', () => {
        expect(() => {
            let myCustomer = new Customer('Danilo Luiz da Silva', '123 Main St');
            myCustomer.changeName('Felipe');
            expect(myCustomer.name).toBe('Felipe');
        })
    });

    it('deve lançar um erro quando o endereço estiver vazio', () => {
        expect(() => {
            let myCustomer = new Customer('Danilo Luiz da Silva', '');
            expect(myCustomer).toThrow(ErrorCustomer.EmptyAddress());
        })
    });
    
    it('deve mudar de endereço', () => {
        expect(() => {
            let myCustomer = new Customer('Danilo Luiz da Silva', '123 Main St');
            myCustomer.changeAddress('456 Elm St');
            expect(myCustomer.address).toBe('456 Elm St');
        })
    });

});