var employee_number;
var employee_name;
var employee_department;
var employee_hours_worked;
var employee_type;

const faculty_masters_rate = 175;
const faculty_masters_allowance = 1500;
const faculty_bachelors_rate = 100;
const faculty_masters_allowance = 600;

const tax_free_allowance = 2500;

const canadian_income_tax = 0.25;

var gross_income;
var health_surcharge_fee;

if (gross_income>3000){
    health_surcharge_fee=33;
} else{
    health_surcharge_fee=19.20;
}