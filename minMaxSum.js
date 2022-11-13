function miniMaxSum(arr) {
    // Write your code here
    let min = Infinity, max = -Infinity
    
    for(let i = 0; i < arr.length; i++) {
        let sum = 0
        for(let j = 0; j < arr.length; j++) {
            if(i != j) {
                sum += arr[j]
            }
        }
        
        if(sum < min) min = sum
        if(sum > max) max = sum
    }
    
    console.log(min, max)
}

const arr = [-4,3,-9,0,4,1]

miniMaxSum(arr)