'use strict';
import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = null;
    this.searchQuery = '';
  }

  fetchPhotosByQuery() {
    const searchParams = {
      query: this.searchQuery,
      page: this.page,
      per_page: 12,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    };

    return axios.get(`${this.#BASE_URL}/search/photos`, { params: searchParams });
  }

  fetchRandomPhotos() {
    const searchParams = {
      orientation: 'portrait',
      count: 12,
      client_id: this.#API_KEY,
    };

    return axios.get(`${this.#BASE_URL}/photos/random`, { params: searchParams });
  }
}
