import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

axios
  .get(`${BASE_URL}/posts`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
