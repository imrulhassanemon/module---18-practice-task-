function sumAllPrices(prices){

    let total = 0;

    for(let price of prices){
        total = price + total
    }
    return total;


}

console.log(sumAllPrices([100, 250, 75]));