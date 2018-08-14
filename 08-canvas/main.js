const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const setMousePosition = (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

const draw = (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    setMousePosition(e);
  } 
}

const setDrawing = (state) => {
  isDrawing = state;
}

const setDefaultCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.strokeStyle = '#000000';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = '5';
}

canvas.addEventListener('mousedown', (e) => {
  setDrawing(true)
  setMousePosition(e);
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => setDrawing(false));
canvas.addEventListener('mouseout', () => setDrawing(false));

setDefaultCanvas();
