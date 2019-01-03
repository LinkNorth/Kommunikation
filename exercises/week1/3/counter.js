function Counter() {
  this.count = 0;
}

Counter.prototype.increase = function() {
  this.count += 1;
};

Counter.prototype.decrease = function() {
  this.count -= 1;
};

Counter.prototype.getCount = function() {
  return this.count;
};

Counter.prototype.reset = function() {
  this.count = 0;
}

module.exports = Counter;
