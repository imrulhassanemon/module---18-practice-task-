const swapVariable = (a, b) => {
    [a, b] = [b, a]

    return [a, b]

}

console.log(swapVariable(0, 5));