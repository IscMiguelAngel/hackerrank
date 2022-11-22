function migratoryBirds(arr) {
    // Write your code here
  const result = {}
  for (const i of arr) {
    result[i] = result[i] + 1 || 1
  }
  for (const property in result) {
      console.log(`${property}: ${result[property]}`);
  }
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])