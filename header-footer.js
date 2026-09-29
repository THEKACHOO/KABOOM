(function() {
    const headerHTML = `
    <header>
        <div class="hf-container">
            <div class="header-content">
                <div class="logo-container" onclick="window.location.href='https://thekachoo.github.io/KABOOM/'">
                    <img src="https://thekachoo.github.io/KABOOM/kaboom-logo.png" alt="KABOOM Logo" id="logo" />
                    <div class="article-category">KABOOM</div>
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
                        <div><i class="fas fa-map-marker-alt"></i><span>Jenderal Sudirman Avenue, No. 61-62, South Jakarta</span></div>
                        <div><i class="fas fa-envelope"></i><span>ohkachoo@gmail.com</span></div>
                        <div><i class="fab fa-twitter"></i><span>@TheKachoo @HaiKachoo</span></div>
                    </div>
                </div>
                <div class="footer-about">
                    <h3>About Kaboom!</h3>
                    <p>The Kaboom by The Kachoo is a tabloid founded in 2026 that explores the intersection of nature, animals, humans, and lighthearted gossip. From the depths of the ocean to the latest celebrity eco-venture, we cover it all with style and substance.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 KABOOM! by The Kachoo. All the content in this article is for roleplay purposes only.</p>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
