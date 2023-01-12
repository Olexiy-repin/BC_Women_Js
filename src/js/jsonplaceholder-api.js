'use strict';

export class JsonPlaceholderApi {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() {
    this.page = 1;
  }

  fetchPosts() {
    const searchParams = new URLSearchParams({
      _limit: '20',
      _page: this.page,
    });

    return fetch(`${JsonPlaceholderApi.BASE_URL}/posts?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
