function Company(){
    this.employeesList = [];
    this.name = "SPS"
}

Company.prototype.addEmployee = function(employee){
    this.employeesList.push(employee);
}

function Employee(name = "Name", title = "Title", salary = 0, status = "Full-Time"){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}, Job Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
}

//Checking default arguments
const sps = new Company();
const test = new Employee();
const noTitle = new Employee("Brooke", undefined, 50000, "Full-Time");
const brooke = new Employee("Brooke Horrocks", "Loan Resolution Specialist", 60000);
const kelsie = new Employee("Kelsie Kunz", "Loan Retention Specialist", 45000, "Part-Time");
const tennille = new Employee("Tennille Rodgers", "Loan Retention Specialist", 6000);
const maggie = new Employee("Maggie Wood", "Loan Retention Specialist Supervisor", 75000);

console.log();

//Creating instances of Employee
test.printEmployeeForm();
noTitle.printEmployeeForm();
brooke.printEmployeeForm();
kelsie.printEmployeeForm();
tennille.printEmployeeForm();
maggie.printEmployeeForm();

//Adding Employees to Company employeesList array
sps.addEmployee(test);
sps.addEmployee(noTitle);
sps.addEmployee(brooke);
sps.addEmployee(kelsie);
sps.addEmployee(tennille);
sps.addEmployee(maggie);

console.log();
console.log(sps);