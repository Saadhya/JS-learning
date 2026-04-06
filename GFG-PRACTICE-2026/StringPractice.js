const str = "radha_krishan";

for(let i=0; i<str.length; i++){
    for(let j=i+1; j<=str.length; j++){
        console.log(str.slice(i,j));
    }    
}

function checkpalin(){
    let rev = []
    const newstr = str.split('').reverse().join('')
    const res = str===newstr ? "palindrome":  "not palindrome"
    return res;
}
console.log(checkpalin())

