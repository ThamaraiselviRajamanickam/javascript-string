/*4. Capitalize the First Letter of Each Word in a String
Given a string str, return a new string where the first letter of each word is capitalized.
Input: str = "hello world"
Output: "Hello World"
 */

// to chage all letter to uper case:
// var input="hello world"
// function str(input){
//     return input.toUpperCase()}
// console.log(str(input))

// let str = "hello world bye" ;
// function input(str) {
//     return str.replace(/\b\w/g, function(char) {
//         return char.toUpperCase();
//     });
// }

// console.log(input(str)); 
let str = "hello world";
let words = str.split('')
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
   
    
} console.log(words)


