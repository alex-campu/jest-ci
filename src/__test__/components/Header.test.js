import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header'
import { expect } from '@jest/globals';
import {create} from 'react-test-renderer'
describe('<Header/>', ()=>{
    test('Render the header', () => {
        const header= shallow(
             <ProviderMock>
                <Header />
             </ProviderMock>
        )    
        expect(header.length).toEqual(1)
    });
    test('Render title', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.find('.Header-title').text()).toEqual('Platzi Store')
    });
  
})

describe('Header snapshot ', () => {
    test('Chek header snapshot', () => {
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.toJSON()).toMatchSnapshot()
    });
});