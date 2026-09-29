(function() {
    const headerHTML = `
    <header>
        <div class="hf-container">
            <div class="header-content">
                <div class="logo-container" onclick="window.location.href='https://thekachoo.github.io/KABOOM/'">
                    <img src="https://thekachoo.github.io/KABOOM/kaboom-logo.png" alt="KABOOM Logo" id="logo" />
                    <div class="article-category">NATURE</div>
                </div>
                <div class="navigation">
                    <a href="https://thekachoo.github.io/KABOOM" class="nav-btn"><i class="fas fa-home"></i> Beranda</a>
                </div>
            </div>
        </div>
    </header>
    `;

    const footerHTML = `
    <footer>
        <div class="hf-container">
            <div class="footer-content">
                <div class="company-card">
                    <h3>The Kachoo</h3>
                    <div class="company-info">
                        <div><i class="fas fa-map-marker-alt"></i><span>Jl. Jenderal Sudirman No. 61-62, Jakarta</span></div>
                        <div><i class="fas fa-envelope"></i><span>ohkachoo@gmail.com</span></div>
                        <div><i class="fab fa-twitter"></i><span>@TheKachoo @HaiKachoo</span></div>
                    </div>
                </div>
                <div class="footer-about">
                    <h3>Tentang KABOOM!</h3>
                    <p>KABOOM! adalah platform berita dari The Kachoo yang menyajikan konten eksklusif kategori HUMAN.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 KABOOM! — The Kachoo. Seluruh konten hanya untuk keperluan roleplay.</p>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
