Array.prototype.bubbleSort = function() {
  let not_sorted = true;

  while (not_sorted) {
    not_sorted = false;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        not_sorted = true;
      }
    }
  }

  return this;

}

String.prototype.substrings = function() {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      res.push(this.substring(i, j+1));
    }
  }

  return res;
}