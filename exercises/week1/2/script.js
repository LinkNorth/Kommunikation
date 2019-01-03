function getRandomNumberInIntervalAsPromise(min, max) {
  return new Promise((resolve, reject) => {
    resolve(Math.round(Math.random() * (max - min) + min));
  });
}

function getRandomNumberInIntervalAsCallback(min, max, cb) {
  setTimeout(function() {
    cb(Math.round(Math.random() * (max - min) + min));
  }, 10);
}

module.exports = {
  getRandomNumberInIntervalAsPromise: getRandomNumberInIntervalAsPromise,
  getRandomNumberInIntervalAsCallback: getRandomNumberInIntervalAsCallback
};
