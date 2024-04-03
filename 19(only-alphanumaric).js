/*19. Check If a String Contains Only Alphanumeric Characters
Given a string str, return true if str contains only alphanumeric characters, otherwise return false.
Input: str = "123abc"
Output: true
 */
function alphaNumaric(str){
    var isMystr=true
    for(i=0;i<str.length;i++){
        if(!/^[a-z,A-Z,0-9]+$/.test(str[i])){
            isMystr=false;
        }
    }
    return isMystr
}
console.log(alphaNumaric("123abc"))