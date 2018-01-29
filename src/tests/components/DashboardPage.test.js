import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../../components/DashboardPage'

test('should generate dashboard page', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot()
})