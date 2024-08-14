document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            selectedRating = this.getAttribute('data-value');
        });
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        if (selectedRating > 0) {
            document.getElementById('thank-you-msg').textContent = `¡Gracias por tu calificación de ${selectedRating} estrellas!`;
        } else {
            alert('Por favor, selecciona una calificación.');
        }
    });
});
