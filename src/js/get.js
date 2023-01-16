/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

fetch(`${BASE_URL}/users`, {
  method: 'GET',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
