// Codeforces Round #404 (Div. 2)
// A. Anton and Polyhedrons

const tetrahedron = 4,
    cube = 6,
    octahedron = 8,
    dodecahedron = 12,
    icosahedron = 20;

// param[in] n: integer number containing the number of polyhedrons in Anton's Collection
// param[in] s: array containing the names of the polyhedrons in Anton's Collection
function antonAndPolyhedrons(n, s) {
    let numOfFaces = 0;
    for (i = 0; i < n; i++) {
        numOfFaces += s[i];
    }
    console.log(numOfFaces);
}

antonAndPolyhedrons(4, [icosahedron, cube, tetrahedron, dodecahedron]);