// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

const paintRandomPhotosByPageLoad = () => {
  unsplashApi
    .fetchRandomPhotos()
    .then(response => {
      const { data } = response;

      galleryListEl.innerHTML = createGalleryCards(data);
    })
    .catch(err => {
      console.log(err);
    });
};

paintRandomPhotosByPageLoad();

const onLoadMoreBtnElClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(response => {
      const { data } = response;

      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

      if (data.total_pages === unsplashApi.page) {
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const onSearchFormElSubmit = event => {
  event.preventDefault();

  unsplashApi.searchQuery = event.currentTarget.elements.user_search_query.value;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(response => {
      console.log(response);
      const { data } = response;

      if (data.total_pages === 0) {
        return;
      }

      if (data.total_pages === 1) {
        galleryListEl.innerHTML = createGalleryCards(data.results);

        return;
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
