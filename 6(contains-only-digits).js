/*6. Check If a String Contains Only Digits
Given a string str, return true if str contains only digits, otherwise return false.
Input: str = "12345"
Output: true
 */
// var myStr="12345";
// var containDigits= true;
// for(i=0;i<myStr.length;i++)
// {
//     if(myStr[i]<"0" || myStr[i]>"9"){
//         containDigits=false;
//     }
// }
// if(containDigits==true){
//     console.log(true)
// }else{
//     console.log(false)
// }
var str="12345";
var contain=true;
for(i=0;i<str.length;i++){
    if(str[i]<"0" || str[i]>"9"){
        contain=false
    }
}
if(contain==true){
    console.log(true)
}else{
    console.log(false)
}