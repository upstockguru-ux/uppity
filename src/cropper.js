import { getBoundingBox, rotatePoint } from './math.js';

export class UppityCropper {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cropArea = { x: 0, y: 0, w: 100, h: 100 };
    this.rotation = 0; // Degrees
  }

  setRotation(deg) {
    this.rotation = deg;
  }

  crop(imageElement) {
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = this.cropArea.w;
    outputCanvas.height = this.cropArea.h;
    const outCtx = outputCanvas.getContext('2d');

    outCtx.save();
    
    // Perform matrix translations and rotation transforms
    if (this.rotation !== 0) {
      const angleRad = (this.rotation * Math.PI) / 180;
      outCtx.translate(this.cropArea.w / 2, this.cropArea.h / 2);
      outCtx.rotate(angleRad);
      outCtx.translate(-this.cropArea.w / 2, -this.cropArea.h / 2);
    }

    outCtx.drawImage(
      imageElement,
      this.cropArea.x, this.cropArea.y, this.cropArea.w, this.cropArea.h,
      0, 0, this.cropArea.w, this.cropArea.h
    );

    outCtx.restore();
    return outputCanvas.toDataURL('image/jpeg');
  }
}