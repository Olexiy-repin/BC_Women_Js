const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.banner__img_js');

const onGalleryImgElClick = event => {
  // event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = target.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
};

galleryEl.addEventListener('click', onGalleryImgElClick);

const addSrcAttrToImg = () => {
  const galleryImgEls = document.querySelectorAll('.gallery__img');

  galleryImgEls.forEach(el => {
    el.src = el.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується');
  addSrcAttrToImg();
} else {
  console.log('Атрибут loading не підтримується');
  document.body.append(createLazySizesScript());
}
