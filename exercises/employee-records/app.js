function Company(){
    this.employeesList = [];
    this.name = "SPS"
}

Company.prototype.addEmployee = function(employee){
    this.employeesList.push(employee);
}

function Employee(name, title, salary, status){
    this.name = name === undefined ? "Name" : name;
    this.title = title === undefined ? "Title" : title;
    this.salary = salary === undefined ? 0 : salary;
    this.status = status === undefined ? "Full-Time" : status;
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}, Job Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
}

//Checking ternary operation in Constructor
var sps = new Company();
var test = new Employee();
var noTitle = new Employee("Brooke", undefined, 50000, "Full-Time");
var brooke = new Employee("Brooke Horrocks", "Loan Resolution Specialist", 60000);
var kelsie = new Employee("Kelsie Kunz", "Loan Retention Specialist", 45000, "Part-Time");
var tennille = new Employee("Tennille Rodgers", "Loan Retention Specialist", 6000);
var maggie = new Employee("Maggie Wood", "Loan Retention Specialist Supervisor", 75000);

console.log();

test.printEmployeeForm();
noTitle.printEmployeeForm();
brooke.printEmployeeForm();
kelsie.printEmployeeForm();
tennille.printEmployeeForm();
maggie.printEmployeeForm();

sps.addEmployee(test);
sps.addEmployee(noTitle);
sps.addEmployee(brooke);
sps.addEmployee(kelsie);
sps.addEmployee(tennille);
sps.addEmployee(maggie);

console.log();
console.log(sps);