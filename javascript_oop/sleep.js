// Let’s implement Ruby’s sleep but for JavaScript.
//
// sleep 1.2   #=> 1


// function called sleep
// sleep will have a parameter describing number of seconds to sleep
// setTimeout
// callback, possibly as a second parameter
// if statement to know if we callback or not
// preceding and suceeding print statements
// recursion

function sleep (seconds) {
  setTimeout(function () {
    console.log('after sleep');
  }, seconds * 1000);
}

// function setTimeout(callback, duration) {
//  waits for duration amount of time
//  callback()
// }

console.log('before sleep');
sleep(5); // pause execution for one second
console.log('async is bananas');
