const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers.map((nums)=> nums + 1).map((nums) => nums * 10).filter((item) => item > 40);

console.log(newNums)
