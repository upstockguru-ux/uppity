import { AffineMatrix } from '../src/matrix.js';

console.log('--- Initializing Uppity math tests ---');
const mat = new AffineMatrix();
mat.translate(50, 50);
mat.scale(2, 2);

const pt = mat.transformPoint(0, 0);
console.log('Affine transform math test: ', pt.x === 50 && pt.y === 50 ? 'PASSED' : 'FAILED');
console.log('--- Uppity math tests complete ---');