const canvas = document.getElementById("cropCanvas");
const selBox = document.getElementById("selectionBox");
let aspectRatio = 1.0;

function changeAspect(val) {
  aspectRatio = val;
  const currentWidth = selBox.offsetWidth;
  selBox.style.height = (currentWidth / aspectRatio) + "px";
}

function crop() {
  const rect = selBox.getBoundingClientRect();
  console.log("Cropping dimensions:", {
    width: rect.width,
    height: rect.height,
    top: selBox.offsetTop,
    left: selBox.offsetLeft
  });
  alert("Selection cropped! Check console output.");
}