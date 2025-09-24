// Sayfa yüklendiğinde bu kod çalışır
document.addEventListener('DOMContentLoaded', () => {
    // Hoş geldin mesajı
    console.log("Can Bilen'in kişisel portföy sitesine hoş geldiniz!");

    // Örnek: Sayfadaki tüm section'lara bir kenarlık ekleyelim.
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.border = '1px solid #636b8a';
    });

    // Sayfaya ufak bir animasyon eklemek için (isteğe bağlı)
    const heroTitle = document.querySelector('.hero-content h1');
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = 'translateY(20px)';
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
    }, 500);
});