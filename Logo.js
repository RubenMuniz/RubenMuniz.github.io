document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 3000); // Ajusta el tiempo de espera en milisegundos (3000ms = 3s)
});
