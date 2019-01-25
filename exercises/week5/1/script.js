module.exports = {
  groupBy: function(arr, key) {
    let group = {};
    for (let x of arr) {
      if (key in x === false) throw new Error('No value in object with given key');
      let v = x[key];
      if (!group[v]) group[v] = [];
      group[v].push(x);
    }
    return group;
  }
}
