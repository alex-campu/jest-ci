import React from 'react'
import { mount } from 'enzyme'
import {create} from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('<Footer / >', () => {
  const footer = mount(<Footer />)

  test('Render a footer', () => {
    expect(footer.length).toEqual(1)
  })
  test('Render title', ()=>{
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
  })
})

describe('Footer spanshot ', () => {
  test('Prove UI of footer component', () => {
    const footer=create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  });
});
