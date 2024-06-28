function showVideo(pilotName) {
    const videoPopup = document.getElementById('video-popup');
    const video = document.getElementById('popup-video');
    let videoSource = '';

    if (pilotName === 'senna') {
        videoSource = 'senna_video.mp4';
    }
    // Agregar condiciones para más pilotos según sea necesario

    video.src = videoSource;
    videoPopup.style.display = 'flex';
    video.play();
}

function hideVideoPopup() {
    const videoPopup = document.getElementById('video-popup');
    const video = document.getElementById('popup-video');
    videoPopup.style.display = 'none';
    video.pause();
    video.currentTime = 0; // Reset video to start
}
