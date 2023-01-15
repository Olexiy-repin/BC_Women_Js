/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

const deleteUserById = userId => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/users/${userId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

deleteUserById(11)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
