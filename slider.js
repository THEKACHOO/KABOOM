(function() {
    const wrapper = document.getElementById('sliderWrapper');
    if (!wrapper) return;

    const slides = wrapper.querySelectorAll('img');
    const total = slides.length;
    let current = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');

    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        dot.dataset.index = i;
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', function() {
            goTo(parseInt(this.dataset.index));
        });
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('span');

    function updateSlider() {
        wrapper.style.transform = 'translateX(-' + (current * 100) + '%)';
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        current = index;
        updateSlider();
    }

    prevBtn.addEventListener('click', function() {
        goTo(current - 1);
    });
    nextBtn.addEventListener('click', function() {
        goTo(current + 1);
    });

    let startX = 0;
    let isDragging = false;
    const container = document.getElementById('slider');
    container.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });
    container.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) goTo(current + 1);
            else goTo(current - 1);
        }
        isDragging = false;
    }, { passive: true });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        else if (e.key === 'ArrowRight') goTo(current + 1);
    });

    updateSlider();
})();
