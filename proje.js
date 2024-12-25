function openLightbox(imgElement) {
    // Lightbox kapsayıcısı oluştur
    let lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Tıklanan resmin büyük versiyonunu ekle
    let img = document.createElement('img');
    img.src = imgElement.src;
    lightbox.appendChild(img);

    // Lightbox stil ayarları
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '9999';

    // Resmin stilleri
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
    img.style.border = '4px solid white';
    img.style.borderRadius = '10px';

    // Lightbox'a tıklayınca kapatma
    lightbox.addEventListener('click', function () {
        lightbox.remove();
    });
}
