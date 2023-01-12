/* 
<li class="posts__item">
    <h2 class="posts__title">{{this.title}}</h2>
    <p class="posts__text">{{this.body}}</p>
    <p class="posts__id">id: {{this.id}}</p>
</li>
*/

export const createPostsCards = postsInfo => {
  const postsArr = postsInfo.map(el => {
    return `
            <li class="posts__item">
                <h2 class="posts__title">${el.title}</h2>
                <p class="posts__text">${el.body}</p>
                <p class="posts__id">id: ${el.id}</p>
            </li>
        `;
  });

  return postsArr.join('');
};
