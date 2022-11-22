function diagonalDifference(arr) {

    let diagonal1 = 0, diagonal2 = 0
    arr.forEach((arreglo, i) => {
        diagonal1 += arreglo[i]
        diagonal2 += arreglo[arr.length - (i + 1)]
    })

    return Math.abs(diagonal1 - diagonal2)
}

const arr = [
    [11,2,4],
    [4,5,6],
    [10,8,-12],
]

console.log(diagonalDifference(arr))