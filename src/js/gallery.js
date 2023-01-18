// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api.js';
import { createGalleryCards } from './templates/gallery-cards.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const searchBtnEl = document.querySelector('.js-search-btn');

const unsplashAPI = new UnsplashAPI();

const appendRandomPhotos = async () => {
  try {
    const { data } = await unsplashAPI.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(data);

    // setTimeout(() => {
    //   const { height: cardHeight } = document
    //     .querySelector('.js-gallery')
    //     .firstElementChild.getBoundingClientRect();

    //   console.log(cardHeight);

    //   window.scrollBy({
    //     top: 400,
    //     behavior: 'smooth',
    //   });
    // }, 100);
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

    if (data.total_pages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
  } catch (err) {
    console.log(err);
  }

  searchBtnEl.disabled = false;
  searchBtnEl.classList.remove('disabled');
};

const onLoadMoreBtnClick = async event => {
  event.target.disabled = true;
  event.target.classList.add('disabled');

  unsplashAPI.page += 1;

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    galleryListEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(data.results)
    );

    setTimeout(() => {
      const { height: cardHeight } = document
        .querySelector('.js-gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }, 100);

    if (data.total_pages === unsplashAPI.page) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }

  event.target.disabled = false;
  event.target.classList.remove('disabled');
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
