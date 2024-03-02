// for-of loop
for (let a of this) {
  return this[this.length - 1];
}

// for-in looop

// for-each loop

// array.prototype
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
