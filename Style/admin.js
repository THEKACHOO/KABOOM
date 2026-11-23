(function () {
    const STORAGE_KEY = 'kaboom_form_news';
    const API_URL = 'https://script.google.com/macros/s/AKfycbz4xuBh8RhaRLstzoEnWsgwNVAimNRncpq_11wBrOu1q2rktnL4g13IxnoE1RIrkblY/exec';
    const form = document.getElementById('newsForm');
    const msg = document.getElementById('msg');
    const fotoInput = document.getElementById('foto');
    const previewImg = document.getElementById('previewImg');
    const adminList = document.getElementById('adminList');
    const listCount = document.getElementById('listCount');
    const resetBtn = document.getElementById('resetBtn');

    function getNews() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveNews(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }

    function showMsg(text, type) {
        msg.textContent = text;
        msg.className = 'msg show ' + (type === 'error' ? 'msg-error' : 'msg-success');
        setTimeout(() => {
            msg.className = 'msg';
        }, 4000);
    }

    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderList() {
        const items = getNews();
        listCount.textContent = items.length + ' berita';
        if (!items.length) {
            adminList.innerHTML = '<div class="empty-state">Belum ada berita dari form.</div>';
            return;
        }
        adminList.innerHTML = items.slice().reverse().map(item => `
            <div class="admin-item">
                <div class="admin-item-img" style="background-image:url('${item.image || ''}')">
                    <span class="admin-item-tag">${escapeHtml(item.tag)}</span>
                </div>
                <div class="admin-item-body">
                    <h3 class="admin-item-title">${escapeHtml(item.title)}</h3>
                    <div class="admin-item-meta">${escapeHtml(item.date)}</div>
                    <div class="admin-item-actions">
                        <a class="btn btn-secondary btn-sm" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">Buka</a>
                        <button type="button" class="btn btn-danger btn-sm" data-id="${item.id}">Hapus</button>
                    </div>
                </div>
            </div>
        `).join('');

        adminList.querySelectorAll('[data-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                if (!confirm('Hapus berita ini?')) return;
                const filtered = getNews().filter(n => n.id !== id);
                saveNews(filtered);
                renderList();
                showMsg('Berita berhasil dihapus.', 'success');
            });
        });
    }

    fotoInput.addEventListener('change', async () => {
        const file = fotoInput.files[0];
        if (!file) {
            previewImg.classList.remove('visible');
            previewImg.src = '';
            return;
        }
        if (!/^image\/(png|jpeg|jpg)$/.test(file.type)) {
            showMsg('Format foto harus JPG atau PNG.', 'error');
            fotoInput.value = '';
            previewImg.classList.remove('visible');
            return;
        }
        const dataUrl = await readFileAsDataURL(file);
        previewImg.src = dataUrl;
        previewImg.classList.add('visible');
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        previewImg.classList.remove('visible');
        previewImg.src = '';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('judul').value.trim();
        const excerpt = document.getElementById('excerpt').value.trim();
        const tag = document.getElementById('tag').value.trim();
        const date = document.getElementById('tanggal').value.trim();
        const link = document.getElementById('link').value.trim();
        const file = fotoInput.files[0];

        if (!title || !excerpt || !tag || !date || !link) {
            showMsg('Semua field wajib diisi (kecuali foto).', 'error');
            return;
        }

        let image = '';
        if (file) {
            image = await readFileAsDataURL(file);
        }

        const id = 'n_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
        const items = getNews();
        items.push({ id, title, excerpt, tag, date, link, image });
        saveNews(items);

        fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {'Content-Type':'text/plain'},
            body: JSON.stringify({ __source: 'admin', id, title, excerpt, tag, date, link, image })
        }).catch(() => {});

        form.reset();
        previewImg.classList.remove('visible');
        previewImg.src = '';
        renderList();
        showMsg('Berita berhasil ditambahkan ke halaman utama.', 'success');
    });

    renderList();
})();
