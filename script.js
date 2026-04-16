// Update current time in milliseconds
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time immediately
updateTime();

// Update time every 500ms
setInterval(updateTime, 500);

// Optional: Press 'T' key to announce current time for screen readers
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 't') {
        const timeElement = document.getElementById('current-time');
        
        // Create temporary live region
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('style', 'position: absolute; left: -9999px;');
        liveRegion.textContent = `Current time in milliseconds: ${timeElement.textContent}`;
        
        document.body.appendChild(liveRegion);
        
        // Remove after announcement
        setTimeout(() => {
            if (liveRegion.parentNode) {
                document.body.removeChild(liveRegion);
            }
        }, 1500);
    }
});