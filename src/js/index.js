console.log('Start');

const promise = new Promise((resolve, reject) => {
  console.log('Hello from Promise!');

  resolve(10);
});

setTimeout(() => {
  console.log('Hello from setTimeout!');
}, 0);

promise.then(result => {
  console.log('Hello from then!');

  console.log(result);
});

console.log('End!');
