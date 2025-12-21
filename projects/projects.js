// Case study page helper: lightbox + simple animations
document.addEventListener('DOMContentLoaded', () => {
  // Fade in case-overview
  const overview = document.querySelector('.case-overview');
  if (overview) {
    requestAnimationFrame(() => overview.classList.add('visible'));
  }

  // Build lightbox (exclude thumbnail-row images)
  const allImages = Array.from(document.querySelectorAll('.case-overview img'));
  const images = allImages.filter(img => !img.closest('.thumbnail-row'));
  if (images.length === 0) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="close-btn" aria-label="Close">Close</button>
    <img src="" alt="Expanded image" />
  `;

  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close-btn');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  images.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  // Thumbnail -> main media switching (support video as main)
  const mainImg = document.getElementById('mainMedia');
  const mainVideo = document.getElementById('mainVideo');
  const mainVideoSource = mainVideo ? mainVideo.querySelector('source') : null;
  const thumbs = Array.from(document.querySelectorAll('.thumbnail-row .thumb'));

  if (thumbs.length > 0) {
    thumbs.forEach((thumb, idx) => {
      const img = thumb.querySelector('img');
      if (!img) return;

      const activateThumb = () => {
        const isVideo = thumb.dataset.video;
        const poster = thumb.dataset.poster;

        if (isVideo && mainVideo && mainVideoSource) {
          // show video as main
          mainVideo.pause();
          mainVideoSource.src = isVideo;
          if (poster) mainVideo.poster = poster;
          mainVideo.load();
          mainVideo.style.display = 'block';
          if (mainImg) mainImg.style.display = 'none';
        } else {
          // show image as main
          if (mainVideo) {
            mainVideo.pause();
            mainVideo.style.display = 'none';
          }
          if (mainImg) {
            mainImg.src = img.src;
            mainImg.alt = img.alt || '';
            mainImg.style.display = 'block';
          }
        }

        // active styles
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      };

      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        activateThumb();
      });

      // keyboard access
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateThumb();
        }
      });

      // set first thumb active by default
      if (idx === 0) thumb.classList.add('active');
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
