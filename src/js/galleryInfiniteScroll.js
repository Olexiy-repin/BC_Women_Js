// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api.js';
import { createGalleryCards } from './templates/gallery-cards.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const searchBtnEl = document.querySelector('.js-search-btn');
const targetEl = document.querySelector('.target-element');

const unsplashAPI = new UnsplashAPI();
const observer = new IntersectionObserver(
  async (entries, observer) => {
    if (!entries[0].isIntersecting) {
      return;
    }

    unsplashAPI.page += 1;

    try {
      const { data } = await unsplashAPI.fetchPhotosByQuery();

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );

      if (data.total_pages === unsplashAPI.page) {
        observer.unobserve(targetEl);
      }
    } catch (err) {
      console.log(err);
    }
  },
  {
    root: null,
    rootMargin: '0px 0px 450px 0px',
    threshold: 1.0,
  }
);

const appendRandomPhotos = async () => {
  try {
    const { data } = await unsplashAPI.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(data);
  } catch (err) {
    console.log(err);
  }
};

appendRandomPhotos();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  searchBtnEl.disabled = true;
  searchBtnEl.classList.add('disabled');

  unsplashAPI.query = event.target.elements.user_search_query.value;
  unsplashAPI.page = 1;

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    if (data.results.length === 0) {
      alert('За вашим запитом нічого не знайдено');
      event.target.reset();
      galleryListEl.innerHTML = '';

      return;
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);

    setTimeout(() => {
      observer.observe(targetEl);
    }, 100);
  } catch (err) {
    console.log(err);
  }

  searchBtnEl.disabled = false;
  searchBtnEl.classList.remove('disabled');
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
