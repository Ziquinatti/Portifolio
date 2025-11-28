window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.proj-item').forEach(gallery => {
        const mainImage = gallery.querySelector('.main-image');
        const thumbs = gallery.querySelectorAll('.thumb');

        thumbs.forEach(thumb => {
            thumb.addEventListener('mouseenter', () => {
                mainImage.src = thumb.dataset.full;
            });
        });
    });
});
