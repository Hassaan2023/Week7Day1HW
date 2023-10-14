//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findwords(dog_string, dog_names) {
    let found = false; //Your code goes here
    for (let i = 0; i < dog_names.length; i++) {
      if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
        console.log("Matched: " + dog_names[i]);
        found = true;
      }
    }
    if (!found) {
      console.log("No Matches");
    }
  }

  findwords(dog_string, dog_names);
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push("even index");
      } else {
        result.push(arr[i]);
      }
    }
    
    return result;
  }
  
  const arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  const replacedArr = replaceEvens(arr);
  
  console.log(replacedArr); 
  
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Codewars problem 1
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
  
    // Sum elements of the first array
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
  
    // Sum elements of the second array
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
    }
  
    return sum;
  }

  // Codewars problem 2 
  https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

  function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++;
      } else if (input[i] < 0) {
        sumNegatives += input[i];
      }
    }
  
    return [countPositives, sumNegatives];
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  const result = countPositivesSumNegatives(inputArray);
  console.log(result); // Output: [10, -65]