import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Loading from '../../src/components/loading'

describe('<Loading />', () => {
  it('rendering', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children()).toHaveLength(2)
  })
  it('should have title when passed title return Loading or Aguarde', () => {
    const wrapper = shallow(<Loading title="Loading" />)
    expect(wrapper.props().children[1].props.children).toEqual('Loading')
    const wrapperB = shallow(<Loading title="Aguarde" />)
    expect(wrapperB.props().children[1].props.children).toEqual('Aguarde')
  })
  it('should not have title when title not passed title return Loading...', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.props().children[1].props.children).toEqual('Loading...')
  })
})
