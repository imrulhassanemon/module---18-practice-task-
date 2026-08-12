const getLowestPrice = (prices) => {
    const lowerPirce = Math.min(...prices)
    return lowerPirce
}

console.log(getLowestPrice([340, 120, 560, 90]));