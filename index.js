const employee = {
    name: "employeeName",
    streetAddress: "address",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...deleteFromEmployeeByKey};
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}