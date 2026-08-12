function getManagerName(employee){
    
    return employee.manager?employee.manager.name: undefined

}

console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
console.log(getManagerName({ name: "Rafi" }));