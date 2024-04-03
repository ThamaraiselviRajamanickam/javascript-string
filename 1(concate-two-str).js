/*1. Concatenate Two Strings Without Using the + Operator
Given two strings str1 and str2, return a new string that is the concatenation of str1 and str2.
Input: str1 = "Hello", str2 = "World"
Output: "HelloWorld"
 */
var str="hello"
var str2="world"
var output= str.concat(str2)
var out=(`${str}${str2}`)
console.log(output);
