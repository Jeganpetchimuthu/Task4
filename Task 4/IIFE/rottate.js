const array = (function () {
  const array = [1, 2, 3, 4, 5];
  const k = 2;

  return function () {
    for (let i = 0; i < k; i++) {
      const element = array.pop();
      array.unshift(element);
    }
    return array;
  };
})();

console.log(array());
