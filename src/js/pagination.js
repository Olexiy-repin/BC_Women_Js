// https://jsonplaceholder.typicode.com/
import { JsonPlaceholderApi } from './jsonplaceholder-api.js';
import { createPostsCards } from './templates/posts-cards.js';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

jsonPlaceholderApi
  .fetchPosts()
  .then(data => {
    console.log(data);

    postsListEl.innerHTML = createPostsCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      if (data.length === 0) {
        loadMoreBtnEl.style.display = 'none';

        return;
      }

      postsListEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(err => {
      console.log(err);
    });

  console.log(jsonPlaceholderApi);
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
