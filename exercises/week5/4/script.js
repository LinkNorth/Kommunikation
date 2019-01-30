module.exports = {
  value: null,
  setValue: function(newValue) {
    this.value = newValue;
  },
  getValue: function() {
    return this.value;
  },
  show: function() {
    console.log(this.getValue());
  },
  increment: function(value) {
    this.setValue(value + this.getValue());
  }
};
