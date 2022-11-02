class Vertex {
	data: string;
	edges: string[];
	
	constructor(data: string) {
		this.data = data;
		this.edges = [];
	}
}

class Edge {
    start: Vertex;
    end:   Vertex;

    constructor(startVertex: Vertex, endVertex: Vertex) {
        this.start = startVertex;
        this.end = endVertex;
    }
}

class Graph {
    vertices: Vertex[];

    constructor() {
        this.vertices = [];
    }
    

}


