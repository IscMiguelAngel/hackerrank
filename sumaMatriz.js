function simpleArraySum(arr) {
    // Write your code here
  let result = 0
  arr.forEach(n => result += n)

  console.log(result)
}

simpleArraySum([1, 2, 3, 4, 10, 11])