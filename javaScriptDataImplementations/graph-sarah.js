var Vertex = /** @class */ (function () {
    function Vertex(data) {
        this.data = data;
        this.edges = [];
    }
    return Vertex;
}());
var Edge = /** @class */ (function () {
    function Edge(startVertex, endVertex) {
        this.start = startVertex;
        this.end = endVertex;
    }
    return Edge;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = [];
    }
    return Graph;
}());
