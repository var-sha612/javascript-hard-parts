// CHALLENGE 1
function createFunction() {
    function hello() { 
      console.log("hello");
    }
    return hello;
  }
  
  // /*** Uncomment these to check your work! ***/
  const function1 = createFunction();
  function1(); // => should console.log('hello');
  
  
  // CHALLENGE 2
  function createFunctionPrinter(input) {
    function justPrint() {
      console.log(input)
    }
      return justPrint;
  }
  
  // /*** Uncomment these to check your work! ***/
  const printSample = createFunctionPrinter('sample');
  printSample(); // => should console.log('sample');
  const printHello = createFunctionPrinter('hello');
  printHello(); // => should console.log('hello');
  
  
  // CHALLENGE 3
  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // /*** Uncomment these to check your work! ***/
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();
  
  
  function addByX(x) {
    function addInputToX(input){
      console.log(input + x)
    }
      return addInputToX;
  }
  
  // /*** Uncomment these to check your work! ***/
  const addByTwo = addByX(2);
  addByTwo(1); // => should return 3
  addByTwo(2); // => should return 4
  addByTwo(3); // => should return 5
  
  const addByThree = addByX(3);
  addByThree(1); // => should return 4
  addByThree(2); // => should return 5
  
  const addByFour = addByX(4);
  addByFour(4); // => should return 8
  addByFour(5); // => should return 9
  
  
  // CHALLENGE 4
  function once(func) {
    let counter = 0
    function unq(input){
      if(counter == 0) {
          func(input)
        count++;
      }
    }
    return unq;
  }
  
  // /*** Uncomment these to check your work! ***/
  const onceFunc = once(addByTwo);
  console.log(onceFunc(4));  // => should log 6
  console.log(onceFunc(10));  // => should log 6
  console.log(onceFunc(9001));  // => should log 6