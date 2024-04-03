/*9. Remove All Spaces From a String
Given a string str, return a new string that has all spaces removed.
Input: str = "hello world"
Output: "helloworld"
 */
var str="hello world";
var space="";
for(i=0;i<str.length;i++){
    if(str[i]!==" ")
    space+=str[i];
}
console.log(space)







// var myStr="hello world";
// var space=""
// for(var i=0;i<=myStr.length-1;i++){
//     if(myStr[i]!==" "){
//         space+=myStr[i]

//     }
// }console.log(space)