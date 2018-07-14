
import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav', () => {
	it('Should render without crashing', () => {
		shallow(<TopNav />)
	});

	it('should call restartGame', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav dispatch={callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault(){}
		});
		expect(callback).toHaveBeenCalled();
	});

	it('Should call onGerateAuralUpdate', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav dispatch={callback} />);
		const link = wrapper.find('.visuallyhidden');
		link.simulate('click', {
			preventDefault(){}
		});
		expect(callback).toHaveBeenCalled();
	});
})

