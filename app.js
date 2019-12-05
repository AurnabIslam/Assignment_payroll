const faculty_masters_rate = 175;
const faculty_masters_allowance = 1500;
const faculty_bachelors_rate = 100;
const faculty_bachelors_allowance = 600;

const tax_free_allowance = 2500;
const canadian_income_tax = 0.25;

var gross_income;
var health_surcharge_fee;

if (gross_income>3000){
    health_surcharge_fee=33;
} else{
    health_surcharge_fee=19.20;
}

function  calulateButton() {
    var employee_number = document.getElementById('employee_number').value;
    var employee_name = document.getElementById('employee_name').value;
    var employee_department = document.getElementById('employee_department').value;
    var employee_hours_worked = document.getElementById('employee_hours_worked').value;
    var employee_type = document.getElementById('employee_type').value;

    console.log("Employee Name:" + employee_name);
    console.log("Employee Number:" + employee_number);
    console.log("Hours Worked:" + employee_hours_worked);
    console.log("Employee type:" + employee_type);
}