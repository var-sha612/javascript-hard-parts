// // http://csbin.io/callbacks

// Challenge 1
function addTwo(num) {
    return num+2
}

// Challenge 3
function map(array, callback) {
    forEach(array, function(element) {
      console.log(callback(element))
  });

}

// Challenge 4
function forEach(array, callback) {
  for(let i=0; i < array.length; i++) {
    callback(array[i])
  }
}

// map([1, 2, 3], addTwo);

// Challenge 5
function mapWith(array, callback) {
    forEach(array, function(element) {
        console.log(callback(element))
    });
  }
  // OR
  function mapWith(array, callback) {
    const mappedArray = [];
    forEach(array, el => mappedArray.push(callback(el)));
    return mappedArray;
  }
  
  // mapWith([1, 2, 3], addTwo);
  
  
  // Challenge 6
  function reduce(array, callback, initialValue) {
    let acc = initialValue
    for(let i=0; i < array.length; i++) {
      acc = callback(acc, array[i])
    }
    return acc;
  
  }
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0))
  