// Update current epoch time
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initial + live update
updateTime();
setInterval(updateTime, 500);

// Press 'T' to announce time (screen reader friendly)
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 't') {
        const timeElement = document.getElementById('current-time');
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-9999px';
        liveRegion.textContent = `Current epoch time: ${timeElement.textContent} milliseconds`;
        
        document.body.appendChild(liveRegion);
        
        setTimeout(() => {
            if (liveRegion.parentNode) document.body.removeChild(liveRegion);
        }, 1500);
    }
});