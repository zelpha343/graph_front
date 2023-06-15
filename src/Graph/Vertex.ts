class Vertex<T> {
	id: number;
	value: T;
	paths: [number, number][];

	constructor(id: number, value: T, paths: [number, number][] = []) {
		if (!Number.isInteger(id) || id <= 0) {
			throw new Error('id must be a natural number');
		}

		if (!id || !value) {
			throw new Error('id and value cannot be empty');
		}

		for (const path of paths) {
			if (
				!Array.isArray(path) ||
				path.length !== 2 ||
				!Number.isInteger(path[0]) ||
				!Number.isInteger(path[1])
			) {
				throw new Error('Each path element must be a tuple with two numbers');
			}
		}

		this.id = id;
		this.value = value;
		this.paths = paths;
	}
}

export { Vertex };
