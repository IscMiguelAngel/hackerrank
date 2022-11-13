function plusMinus(arr) {
    // Write your code here
    let positive = 0, negative = 0, zero = 0, dividend = arr.length
    arr.map(item => {
        if(item > 0) positive++
        if(item < 0) negative++
        if(item == 0) zero++
    })
    
    console.log((positive/dividend).toFixed(6))
    console.log((negative/dividend).toFixed(6))
    console.log((zero/dividend).toFixed(6))
    
}

const arr = [-4,3,-9,0,4,1]

plusMinus(arr)