/*2. Count the Number of Vowels in a Given String
Given a string str, return the number of vowels in the string.
Input: str = "Hello World"
Output: 3
 */




// for(i=0;i<=input.length;i++){
//     if(vowels.includes(input[i])){
//       count++;
//     }
// }
// console.log(count)
var input = "Hello World";
var vowels = ["a", "e", "i", "o", "u"];
count = 0;
for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      count++;
    }
  }
}
console.log(count);

// var str="hello"
// var out=str.split('').reverse().join('')
// console.log(out)
