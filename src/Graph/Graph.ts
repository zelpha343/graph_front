import { Vertex } from './Vertex';

class Graph {
	id: number;
	Vertices: Vertex<any>[] = [];
	vertex_ids: number[] = [];

	constructor(id: number, Vertices: Vertex<any>[] = []) {
		this.id = id;
		this.Vertices = Vertices;

		for (let i = 0; i < Vertices.length; i++) {
			this.vertex_ids.push(Vertices[i].id);
		}
	}

	addVertex = (v: Vertex<any>) => {
		if (this.vertex_ids.includes(v.id)) {
			throw new Error(`Vertex with ID ${v.id} already exists in the graph`);
		}

		this.Vertices.push(v);
		this.vertex_ids.push(v.id);
	};

	removeVertex = (id: number) => {
		const index = this.vertex_ids.indexOf(id);
		if (index === -1) {
			throw new Error(`Vertex with ID ${id} does not exist in the graph`);
		}

		this.vertex_ids.splice(index, 1);
		this.Vertices.splice(index, 1);
	};

	getVertex = (id: number) => {
		const index = this.vertex_ids.indexOf(id);
		if (index === -1) {
			throw new Error(`Vertex with ID ${id} does not exist in the graph`);
		}

		return this.Vertices[index];
	};

	setVertex(id: number, newID: number = -1, newValue: any = -1, newPaths: [number, number][] = []) {
		let index = this.vertex_ids.indexOf(id);
		if (index === -1) {
			throw new Error(`Vertex with ID ${id} does not exist in the graph`);
		}

		let oldVertex = this.Vertices[index];
		let updatedID = newID !== -1 ? newID : id;
		let updatedValue = newValue !== -1 ? newValue : oldVertex.value;
		let updatedPaths = newPaths.length > 0 ? newPaths : oldVertex.paths;

		let newVertex = new Vertex<any>(updatedID, updatedValue, updatedPaths);
		this.Vertices[index] = newVertex;
	}
}
