import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Todos from './todos';

describe('Todos', () => {
	let el: RenderResult;

	beforeEach(() => {
		el = render(<Todos todos={[]} />);
		global.fetch = {} as any;
	});

	it('should render successfully', () => {
		expect(el.baseElement).toBeTruthy();
	});
});
