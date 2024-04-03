/*20. Determine If a String Is a Pangram (Contains Every Letter of the Alphabet)
Given a string str, return true if str is a pangram (contains every letter of the alphabet), otherwise return false.
Input: str = "The quick brown fox jumps over the lazy dog"
Output: true

 */
function pangramFun(str){
    var isPangram=true;
    for(var i=0;i<str.length;i++){
        if(!/[a-z,A-Z]+$/.test(str[i])){
            isPangram=false;
        }
        return isPangram
    }
    }
    console.log(pangramFun("The quick brown fox jumps over the lazy dog"));