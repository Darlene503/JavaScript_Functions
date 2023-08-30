console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    console.log('Invalid input. Please provide a positive count.');
    return;
  }
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log('${i} is odd');
      }
    }
  }
  printOdds(5)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(name, age){
  let aboveSixteen = `Congrats ${name}, you can drive!`;

  let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`;
    if (!name || !age) {
      console.log("Please provide both name and age.");
      return;
    }  

    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  }
  

  checkAge("Darlene", 43)


  //EX 3 

  function analyzePoint(x, y) {
    if (x === 0 && y === 0) {
      console.log(`The point (${x}, ${y}) is at the origin.`);
    } else if (x === 0) {
      console.log(`The point (${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
      console.log(`The point (${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } else {
      console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
  }
  
  
  analyzePoint(0, 2); 
  analyzePoint(1, 2);   
  analyzePoint(-6, 18);  





