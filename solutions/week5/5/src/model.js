export default {
  // Will resolve with data in format [{name: string, age: number}]
  fetch: function() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', res => {
        resolve(JSON.parse(res.statusText));
      });
      xhr.open('GET', '/getUsers');
      xhr.send();
    });
  },
  getData: function() {
    return this.fetch()
      .then(data => {
        return data.map(x => {
            const namesplit = x.name.split(" ");
            return {
              firstName: namesplit[0],
              lastName: namesplit[1],
              age: x.age,
              over18: x.age > 18,
            };
          });

      });
    },
};
