function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step) array.push(i);
  } else {
    for (var i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) total += array[i];
  return total;
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

const cllBack = () => ((a, b) => {
  return a + b
})
console.log([1, 2, 3, 4].reduce((a, b) => {
    return a + b;
  })
);

const textEncoded = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+5uQfwAIjwNgV9ckzgAAAABJRU5ErkJggg=="
const decodedText = atob(textEncoded)
console.log(decodedText)

