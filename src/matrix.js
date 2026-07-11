// Affine transformation matrix calculator (rotation, translation, scale)
export class AffineMatrix {
  constructor() {
    this.matrix = [1, 0, 0, 1, 0, 0]; // identity matrix
  }

  translate(tx, ty) {
    this.matrix[4] += this.matrix[0] * tx + this.matrix[2] * ty;
    this.matrix[5] += this.matrix[1] * tx + this.matrix[3] * ty;
  }

  scale(sx, sy) {
    this.matrix[0] *= sx;
    this.matrix[1] *= sx;
    this.matrix[2] *= sy;
    this.matrix[3] *= sy;
  }

  rotate(angleRad) {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const m0 = this.matrix[0], m1 = this.matrix[1];
    const m2 = this.matrix[2], m3 = this.matrix[3];

    this.matrix[0] = m0 * cos + m2 * sin;
    this.matrix[1] = m1 * cos + m3 * sin;
    this.matrix[2] = m0 * -sin + m2 * cos;
    this.matrix[3] = m1 * -sin + m3 * cos;
  }

  transformPoint(x, y) {
    return {
      x: this.matrix[0] * x + this.matrix[2] * y + this.matrix[4],
      y: this.matrix[1] * x + this.matrix[3] * y + this.matrix[5]
    };
  }
}