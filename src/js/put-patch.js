/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserInfo = (userId, userInfo) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUserInfo(11, {
  name: 'Mittie Alexander',
  username: 'Antonette',
  email: 'okeciggi@henbucfu.pl',
  address: {
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Kyiv',
    zipcode: '31428-2261',
    geo: {
      lat: null,
      lng: null,
    },
  },
  phone: '(533) 937-2792',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
  city: 'Kyiv',
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// {
//   name: 'Oleksii Repin',
//   username: 'oleksii',
//   email: 'test@gmail.com',
//   address: {
//     street: 'Victor Plains',
//     suite: 'Suite 879',
//     city: null,
//     zipcode: '90566-7771',
//     geo: {
//       lat: null,
//       lng: null,
//     },
//   },
//   phone: '(811) 572-9923',
//   website: null,
//   company: {
//     name: 'Deckow-Crist',
//     catchPhrase: 'Proactive didactic contingency',
//     bs: 'synergize scalable supply-chains',
//   },
// }
