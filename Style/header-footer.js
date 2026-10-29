function renderHeader() {
    const target = document.getElementById('site-header');
    if (!target) return;

    target.innerHTML = `
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="logo-container" id="logoContainer">
                    <img src="..Logo/Kaboom.png" alt="The Kaboom!" id="logo" class="logo-kaboom">
                </div>
            </div>
        </div>
    </header>`;

    const logoContainer = document.getElementById('logoContainer');
    const logo = document.getElementById('logo');
    if (logoContainer && logo) {
        logoContainer.addEventListener('click', function() {
            logo.classList.remove('logo-kaboom');
            void logo.offsetWidth;
            logo.classList.add('logo-kaboom');
        });
    }
}

function renderFooter() {
    const target = document.getElementById('site-footer');
    if (!target) return;

    target.innerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about scroll-animate">
                    <h3>About Us</h3>
                    <p>The Kaboom! Under The Kachoo is a revolutionary tabloid founded in 2026 that explores the intersection of nature, animals, humans, and gossip. From the depths of the ocean to the latest celebrity eco-venture, we cover it all with style and substance.</p>
                </div>
                <div class="company-card scroll-animate">
                    <h3>The Kachoo</h3>
                    <div class="company-info">
                        <div>
                            <i class="fas fa-envelope"></i>
                            <span>Email: ohkachoo@gmail.com</span>
                        </div>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <span>Official Account (X): <a href="https://x.com/thekachoo" target="_blank" class="x-link">@thekachoo</a></span>
                        </div>
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Jenderal Sudirman Avenue, Lots 61–62, South Jakarta 12930, Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom scroll-animate">
                <p>&copy; 2026 Kaboom! For roleplay purposes only. Any resemblance to actual events or persons is purely coincidental.</p>
            </div>
        </div>
    </footer>`;

    const footerScrollEls = target.querySelectorAll('.scroll-animate');
    const footerInView = (el, dividend = 1) => {
        const top = el.getBoundingClientRect().top;
        return top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };
    const revealFooterEls = () => {
        footerScrollEls.forEach(el => {
            if (footerInView(el, 1.2)) el.classList.add('visible');
        });
    };
    window.addEventListener('scroll', revealFooterEls);
    window.addEventListener('load', () => {
        revealFooterEls();
        target.querySelectorAll('.footer-bottom.scroll-animate').forEach(el => el.classList.add('visible'));
    });
    revealFooterEls();
}

renderHeader();
renderFooter();
