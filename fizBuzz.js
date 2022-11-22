function processData(n) {
    let result = ""
    for(let i = 1; i <= n; i++) {
      result = `${ i % 3 ? "" : "Fizz" }${ i % 5 ? "" : "Buzz" }` || i
    }
    console.log(result)
  }
  
  processData(15)