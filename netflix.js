document.addEventListener('DOMContentLoaded', function() {
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('movieModal');
    const modalTitle = document.getElementById('modal-title');
    const modalThumbnail = document.getElementById('modal-thumbnail');
    const closeButton = document.querySelector('.close-button');

    movieCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.dataset.title;
            const thumbnail = this.dataset.thumbnail;

            modalTitle.textContent = title;
            modalThumbnail.src = thumbnail;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});