'use strict';

















// Gyártja a függvényeket.
function makeCounter () {
  let counter = 0;
  return function increaseCounter() {
    counter += 1;
    console.log(counter);
  }
}

// increaseCounter -> makeCounter.counter
let increaseCounter = makeCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
console.log('--------curly--------');
delete increaseCounter;
makeCounter()();  