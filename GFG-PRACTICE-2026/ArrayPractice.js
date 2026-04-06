
const arr = [1, 2,3 ,4,5, 34,7, 8, 3 ,26, 7, 8];

const unique = arr.filter((val, index)=> arr.indexOf(val)===index)
console.log("unique ele "+ unique);

// odd to even
const res = unique.map(num=> num%2===0? num-1: num+1)
console.log("odd to even "+res)

// add less than 40
const nums = [23,42,56,34,26,45,56,35];
const addition= nums.reduce((acc, num) => num<40? acc+num : acc , 0)
console.log("summing: "+addition)

// returning name from objects array- method chains
const emps = [
    {name:'jay', yrs:20, age:20},
    {name:'hena', yrs:4, age:34},
    {name:'mohit', yrs:15, age:40},
    {name:'karishma', yrs:2, age:37},
    {name:'shahid', yrs:1, age:76}
    ]
const names = emps.filter(emp => emp.yrs > 3).map(e=> e.name)
console.log("method chain: " + names);

// return obj with sum of even and odd using unique arr
const calc= (acc,curr)=> 
    curr %2===0 ? 
    {...acc, even: acc.even+curr} : {...acc, odd: acc.odd+curr}

const resArr= unique.reduce(calc, {even:0, odd:0})
console.log(resArr)
console.log("obj with sum of even and odd "+JSON.stringify(resArr))

// find avg age from array object
// const totalAge = emps.reduce((acc, cur)=> acc+cur.age, 0)
// const avgAge= totalAge / emps.length;

// OR THIS WAY WITHOUT CALCULATING TOTAL AGE SEPARATELY
const avgAge = emps.reduce((acc, cur, index, array)=> {
    acc+=cur.age
    if(index=== array.length-1) return acc/array.length
    return acc
}, 0)
console.log("average age: "+ avgAge)

//find occ as an obj for each element 
const dups = ["a", "b", "c", "d", "b", "cc", "e", "a", "d"];
const occ = dups.reduce((acc, cur)=> 
    cur in acc ? {...acc, [cur]: acc[cur]+1}: {...acc, [cur]: 1 }
, {})

 console.log(occ)
 
 

// great question- 
// Find the number with max freq and if more than 1 num has same freq then return the max num among them
const numArr= [1,2,3,4,3,2,4,3,6,3, 6, 6,7,7,5,7,9,6,8,5,7]

let maxcount = 0;
let arrofMaxFreq=[];
let maxkey=0;
function getNumWithMaxFreq(){
    const numFreq = numArr.reduce((acc, cur)=> cur in acc ? 
    {...acc, [cur]:acc[cur]+1}: 
    {...acc, [cur]: 1}, {})
    
   const keyvalArr = Object.entries(numFreq);
   for(let [, value] of keyvalArr){
       if(maxcount < value)
       maxcount = value;
   }
     console.log(keyvalArr);
    for(let [key, value] of keyvalArr){
       if(value === maxcount)
        arrofMaxFreq.push(key) //(Recommended for Performance)
        // arrofMaxFreq= [...arrofMaxFreq, key] //(Recommended for Immutability) 
   }
   console.log(arrofMaxFreq);
   for(key of arrofMaxFreq){
       if(maxkey <key){
           maxkey = key;
       }
   }
   
   return maxkey;
}
console.log("Reversed arr:- "+ getNumWithMaxFreq());