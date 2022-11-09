const lonelyInteger = (a) => { //función mágica
    const arr1 = [], arr2 = []
    a.forEach((n) => {
        (!arr1.includes(n)) ? arr1.push(n) : arr2.push(n) 
    })

    return arr1.filter(x => !arr2.includes(x))
}

const arr = [1,1,2,0,0] //arr de ejemplo

console.log(lonelyInteger(arr)) //se llama a la función