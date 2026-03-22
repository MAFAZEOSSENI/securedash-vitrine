// SecureDash — script.js
// Mafaze OSSENI & Riyad ODJOUADE

// Ombre navbar au scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});


// Lightbox
function ouvrirLightbox(img) {
    var lb = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightbox-img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('ouvert');
}

function fermerLightbox() {
    var lb = document.getElementById('lightbox');
    lb.classList.remove('ouvert');
    document.getElementById('lightbox-img').src = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerLightbox();
    }
});


// Copier les commandes
function copier(btn) {
    var code = btn.previousElementSibling.textContent.trim();
    navigator.clipboard.writeText(code).then(function() {
        btn.textContent = '✓ Copié';
        btn.style.color = '#4ade80';
        setTimeout(function() {
            btn.textContent = 'Copier';
            btn.style.color = '';
        }, 2000);
    }).catch(function() {
        btn.textContent = 'Ctrl+C';
        setTimeout(function() {
            btn.textContent = 'Copier';
        }, 2000);
    });
}
