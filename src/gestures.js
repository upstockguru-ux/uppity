// Maps gesture scale calculations for touch displays
export class PinchZoomEngine {
  constructor(onUpdate) {
    this.onUpdate = onUpdate;
    this.touchDistance = 0;
  }

  onTouchStart(e) {
    if (e.touches.length === 2) {
      this.touchDistance = this.getDistance(e.touches[0], e.touches[1]);
    }
  }

  onTouchMove(e) {
    if (e.touches.length === 2 && this.touchDistance > 0) {
      const dist = this.getDistance(e.touches[0], e.touches[1]);
      const factor = dist / this.touchDistance;
      this.touchDistance = dist;
      this.onUpdate(factor);
    }
  }

  onTouchEnd() {
    this.touchDistance = 0;
  }

  getDistance(p1, p2) {
    const dx = p1.clientX - p2.clientX;
    const dy = p1.clientY - p2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
}