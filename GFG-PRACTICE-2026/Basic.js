function getsubstr(str){
    let substr= "";
    console.log(str.substring(0, str.length))
    
}
getsubstr("radhe_krishna")

function encodedStr(str){ //encode by shifting the char by 2or4.
    let encstr= "";
    let currpos=0, newpos=0;
    for(let i =0; i<str.length; i++){
        currpos = str.charCodeAt(i);
        newpos= currpos+4;
        encstr+=String.fromCharCode(newpos);
        
    }
    console.log("encoded string: " ,encstr);
}
encodedStr("radhe");

function maskchar(str){
    const maskc = "#".repeat(4);
    const res = str.slice(0, str.length-4)+maskc;
    console.log("masked string: ",res);
    let oddhash="";
    // masking odd nums
    for(let i of str){
         if(i%2!==0){
             oddhash+="*";
         } else {
             oddhash+=i;
         }
    }
    console.log("masking odd nums; " +oddhash);
}
const maskstr= "1223423453558497687"; // with ####
maskchar(maskstr);

const months = ['Jan', 'March', 'April', 'June'];
// At index 1, remove 0 elements and add "Feb"
months.splice(1, 0, 'Feb');
console.log(months); 
// At index 4, remove 1 element ("June") and add "May"
const removed = months.splice(4, 1, 'May'); 
console.log(months); 
console.log(removed); 

function strnovowels(str){
    const vowels = ['a', 'e','i','o','u'];
    let result = "";
    let countvow = 0;
    
    for(let c of str){
        if(!vowels.includes(c.toLowerCase())){ //(case-sensitive
            result+= c;
            countvow++;
        }
    }
    console.log(result)
    console.log("consonant length: "+ str.length, " - ", countvow, (str.length - countvow));
    
}
const senten= "the quick brOwn fox jumps over the little lazy dog";
strnovowels(senten);

//palindrome
// let input = prompt('enter string: ')
function palindrome(){
    let revstr = "";
    for(let i= input.length-1; i>=0; i--){
        revstr+= input[i];
    }
    console.log("rev: "+revstr)
    //const split = input.split("").reverse().join("")
    if(input=== revstr){
        return "palindrome"
    }else{
        return "not palindrome"
    }
}
// console.log(palindrome())
