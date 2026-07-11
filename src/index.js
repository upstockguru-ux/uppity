import { AffineMatrix } from './matrix.js';
import { PinchZoomEngine } from './gestures.js';

export class UppityEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.matrix = new AffineMatrix();
    this.zoom = new PinchZoomEngine((factor) => this.handleZoom(factor));
  }

  handleZoom(factor) {
    this.matrix.scale(factor, factor);
    this.render();
  }

  rotate(deg) {
    this.matrix.rotate((deg * Math.PI) / 180);
    this.render();
  }

  translate(x, y) {
    this.matrix.translate(x, y);
    this.render();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    
    const m = this.matrix.matrix;
    this.ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    
    // Draw viewport alignment grid
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    this.ctx.lineWidth = 1;
    for (let i = 0; i < this.canvas.width; i += 20) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, this.canvas.height);
      this.ctx.stroke();
    }
    
    this.ctx.restore();
  }
}