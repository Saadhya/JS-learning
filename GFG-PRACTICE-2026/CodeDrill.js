// first
const str = "gfg is a comp science learning platform";

let strarr = str.split(' ');

let strlen ;
function sortWordsBylength(){
    strarr.sort((a, b)=> a.length - b.length)
    return strarr.join(' ')
}

console.log("sorted arr; "+ sortWordsBylength());

// second
const revStr = "react is a library";

let strRev = revStr.split(' ');

function revWordsOfStr(){
    let arr = strRev.map((word)=> word.split('').reverse().join(''))
    return arr.join(' ');
}

console.log("Reversed arr:- "+ revWordsOfStr());

// third
