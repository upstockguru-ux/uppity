# uppity

Canvas cropping, texture scaling, and matrix rendering helper.

## Features
- Precise affine transformation rotation mapping
- Lightweight crop coordinates bounding calculations
- Zero dependencies package

## Integration
```javascript
import { UppityCropper } from 'uppity-cropper';

const cropper = new UppityCropper(myCanvas);
cropper.setRotation(90);
const dataUrl = cropper.crop(myImg);
```
