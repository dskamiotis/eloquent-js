// Sum an array of numbers:
// Given an array of numbers, use the reduce method to calculate the sum of all the numbers in the array.

// Example input: [1, 2, 3, 4, 5]
// Expected output: 15

const addNum = [1,2,3,4,5].reduce((acc, curr)=> {
    return acc + curr
})
// console.log(addNum)

// Count the number of occurrences of each word in an array:
// Given an array of words, use the reduce method to create an object that contains the number of occurrences of each word in the array.

// Example input: ["apple", "banana", "apple", "cherry", "banana", "apple"]
// Expected output: { "apple": 3, "banana": 2, "cherry": 1 }

const words = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];

const wordCounts = words.reduce((acc, curr)=>{
    console.log(curr)
    console.log(acc)
    if (acc[curr]){
        console.log(acc[curr])
        acc[curr] ++
    } else {
        acc[curr] = 1
    }
    return acc
}, {})

console.log(wordCounts)

const testObj = { apple: 2, banana: 1, cherry: 2223 }
console.log("PPP", testObj['apple'])
const tested = testObj["bananad"] && "tree"
console.log(tested)

// Flatten an array of arrays:
// Given an array of arrays, use the reduce method to flatten the array into a single array.

// Example input: [[1, 2], [3, 4], [5, 6]]
// Expected output: [1, 2, 3, 4, 5, 6]

const example = [[1, 2], [3, 4], [5, 6]]
const flatArr = []
const flattened = example.reduce((acc, curr)=>{
    console.log(acc)
    return acc.concat(curr)
})

console.log(flattened)

// Calculate the average of an array of numbers:
// Given an array of numbers, use the reduce method to calculate the average of all the numbers in the array.

// Example input: [2, 4, 6, 8, 10]
// Expected output: 6

const arrayNum = [2,4,6,8,10]
let sum = 0;
const averagedArr = arrayNum.reduce((acc, curr, index, array)=>{
    acc += curr
    if (index === array.length - 1){
        return acc/array.length
    } else {
        return acc
    }

    return acc
})
console.log(averagedArr)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}

const data = [
    { name: 'Alice', age: 25, salary: 50000 },
    { name: 'Bob', age: 30, salary: 60000 },
    { name: 'Charlie', age: 35, salary: 70000 }
  ];
  
const totalSalary = data.reduce((acc, curr) => {
    console.log(curr)
    if (curr.age > 27){
        // console.log(curr.salary)
        return acc + curr.salary;
    } else return acc

}, 0);

console.log(totalSalary); // Output: 180000
