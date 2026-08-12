const calculateBill = (amount, taxRate = 0.05) => {
    console.log(amount, taxRate);

    const discount = amount * taxRate
    const total = discount + amount
    return total;


}


console.log(calculateBill(1000, 0.1));