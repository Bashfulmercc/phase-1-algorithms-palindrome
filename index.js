function isPalindrome(word) {
     // convert word to an array
     const arrayValues = word.split('');

     // reverse the array values
     const reverseArrayValues = arrayValues.reverse();
 
     // convert array to word
     const reverseWord = reverseArrayValues.join('');
 
     if(word === reverseWord) {
         return true;
     }
     else {
         return false;
     }
 }


/* 
  This function will return true if the word entered is a palindrome
  This function will return false if the word is not
*/

/*This function takes the word that is passed in and converts it into an array of the letters in the word
/*Then the function reverses the letters in the array to create an array of the letters backwards
/*Then the function takes in the value of the reverse word array and joins it together to form a backwards word
/*Finally it checks to see if the word is equal to its reverse and returns true if so and false if not
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
