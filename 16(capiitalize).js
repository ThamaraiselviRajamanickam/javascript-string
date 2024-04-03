/*16. Capitalize the First Letter of Each Sentence in a String
Given a string str, return a new string where the first letter of each sentence is capitalized.
Input: str = "hello. world."
Output: "Hello. World."
 */
function fistLetter(str){
    var newStr=str.split(" ");
    for(var i=0;i<newStr.length;i++){
        if((newStr[i]=newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1))){
            var str1=newStr.join(" ");
        }
    }
    return str1
}console.log(fistLetter("hello. world."))