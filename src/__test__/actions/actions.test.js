import actions from '../../actions/index'
import ProductMock from '../../__mocks__/ProductMock'
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Actions ', () => {
    test('addToCard Action', () => {
        const payload= ProviderMock
        const expected={
            type: 'ADD_TO_CART',
            payload
        }
        expect(actions.addToCart(payload)).toEqual(expected)
    });
    test('removeFromCart Action', () => {
        const payload= ProviderMock
        const expected={
            type: 'REMOVE_FROM_CART',
            payload
        }
        expect(actions.removeFromCart(payload)).toEqual(expected)
    });
});