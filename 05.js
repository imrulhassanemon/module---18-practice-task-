function  getEmployeeDept(employee) {
    const {name, job:{title, department}} = employee
    return {
        title: title,
        department: department
    }
}

console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }));
