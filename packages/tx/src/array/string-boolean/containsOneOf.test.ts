import {describe, it, expect} from 'vitest';

import {containsOneOf} from './containsOneOf';

describe('containsOneOf', () => {
	it('should return a function that checks if a string contains one of the provided strings', () => {
		const isWeight = containsOneOf(['(g)', '(mg)', '(mcg)']);
		const weightLabels = [
			'id',
			'Energy (kcal)',
			'Protein (g)',
			'Cholesterol (mg)',
			'Selenium (mcg)',
		].filter(isWeight);
		expect(weightLabels).toEqual(['Protein (g)', 'Cholesterol (mg)', 'Selenium (mcg)']);
	});
});
