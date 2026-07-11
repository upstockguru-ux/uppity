// Test affine transformation calculations
import { rotatePoint } from '../src/math.js';

console.log('Running Uppity tests...');
const p = rotatePoint(100, 0, 0, 0, Math.PI / 2); // Rotate (100,0) by 90deg
const success = Math.abs(p.x) < 0.001 && Math.abs(p.y - 100) < 0.001;
console.log('Rotate 90deg calculation check:', success ? 'PASSED' : 'FAILED');