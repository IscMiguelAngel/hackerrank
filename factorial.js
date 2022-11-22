function processData(input) {
    //Enter your code here
    let result = 1;
    if(typeof input == "number" && input > 0) {
        for(let i = 1; i <= (input - 1); i++) {
            result = result * (i + 1)
        }

        console.log(result)
    }

  
} 

processData(5);