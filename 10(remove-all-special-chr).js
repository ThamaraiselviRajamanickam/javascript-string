/*10. Remove All Special Characters From a String
Given a string str, return a new string that has all special characters removed.
Input: str = "hello!@#world"
Output: "helloworld"
 */
var str = "hello!@#world";
var newStr="";
for(var i=0;i<=str.length-1;i++){
    if(/[a-zA-Z0-9]/.test(str[i])){
        newStr+=str[i]
    }
}console.log(newStr)








// var myStr="hello!@#world";
// var newStr=""
// for(var i=0;i<=myStr.length-1;i++){
//     if(/[a-zA-Z0-9]/.test(myStr[i])){
//         newStr+=myStr[i]
//     }
// }
// console.log(newStr)