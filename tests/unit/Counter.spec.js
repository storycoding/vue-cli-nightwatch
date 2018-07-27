import Vue from 'vue';
import { render, Simulate } from 'vue-testing-library';

import Counter from '@/components/Counter.vue';

describe( 'Counter.vue', () => {

	const rendered = render(Counter);

	it('Should exist', () => {
		expect(rendered.getByTestId('count'));
	});

	it('Should render with the intial value of 0', () => {
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});

	it('Should increment when increment button is clicked', () => {
		Simulate.click(rendered.getByTestId('increment'));
		expect(rendered.getByTestId('count').textContent).toBe('1');
	});

	it('Should decrement when decrement button is clicked', () => {
		Simulate.click(rendered.getByTestId('decrement'));
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});

	it('Should not go below zero', () => {
		Simulate.click(rendered.getByTestId('decrement'));
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});

});