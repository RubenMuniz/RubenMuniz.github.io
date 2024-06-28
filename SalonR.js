function showVideo(pilotName) {
    // Ocultar todos los videos al principio
    const videos = document.querySelectorAll('.pilot-video');
    videos.forEach(video => {
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    // Mostrar el video del piloto correspondiente
    const videoToShow = document.getElementById(`${pilotName}-video`);
    videoToShow.style.display = 'block';
    videoToShow.load(); // Recargar el video con la nueva fuente
    videoToShow.play();
}
