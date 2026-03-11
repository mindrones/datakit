/**
 * Split an array into chunks of the specified size.
 *
 * @example
 * > chunkArray([1, 2, 3, 4, 5], 2)
 * [[1, 2], [3, 4], [5]]
 * > chunkArray([1, 2, 3], 3)
 * [[1, 2, 3]]
 */
export const chunkArray = (array: any[], size: number): any[][] => {
	const chunks = [];
	for (let i = 0; i < array.length; i += size) {
		chunks.push(array.slice(i, i + size));
	}
	return chunks;
};
