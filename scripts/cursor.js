const backgroundNet = document.getElementById('backgroundNet');

function updateCursorPosition(event) {
  const x = event.clientX;
  const y = event.clientY;
  backgroundNet.style.setProperty('--cursor-x', `${x}px`);
  backgroundNet.style.setProperty('--cursor-y', `${y}px`);
}

window.addEventListener('pointermove', updateCursorPosition);
window.addEventListener('pointerenter', updateCursorPosition);
window.addEventListener('load', () => {
  updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
});
