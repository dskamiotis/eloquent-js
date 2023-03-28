// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
const flattenedArray = arrays.reduce((acc, curr)=>{
    return acc.concat(curr)
})

// My own loop function
// Your code here.

const loop = (startValue, testFun, updateFun, bodyFuc) => {
    for (let val = startValue; testFun(val); val = updateFun(val)){
        bodyFuc(val)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// Everything
function every(array, test) {
    // Your code here.
    return array.every(test)
}

function  forEvery (array, predicate){
    for (let element of array){
        if (!predicate(element)){
            return true
        }
    }
}
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    // now we have DIR count>text [{name: "ltr", count: 3}, {name: "rtl", count: 9}]
    const mostFreqDir = scripts.reduce((acc,curr)=>{
      return acc.count > curr.count ? acc : curr   
    })
    //return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
    return mostFreqDir.name
  }
  
  console.log(">",dominantDirection("Heخllo!"));
  // → ltr
  console.log(">",dominantDirection("Hey, مساء الخير"));
  // → rtl