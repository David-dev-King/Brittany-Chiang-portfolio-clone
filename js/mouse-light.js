const mouseLight = document.getElementById('mouseLight');

document.addEventListener('mousemove', (e) => {
    mouseLight.style.left = `${e.clientX}px`;
    mouseLight.style.top = `${e.clientY}px`;
})