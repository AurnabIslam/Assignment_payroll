const faculty_masters_rate = 175;
const faculty_masters_allowance = 1500;
const faculty_bachelors_rate = 100;
const faculty_bachelors_allowance = 600;

const tax_free_allowance = 2500;
const canadian_income_tax = 0.25;

var gross_income;
var health_surcharge_fee;
var allowance;
var wage_paid;
var income_tax;
var net_income;
var fixed_salary;
var overtime;
var employee_regular_hourly_rate;



function checkFacultyType(){
    var f_type = document.getElementById('employee_type').value;
    if (f_type == 'F'){
        document.getElementById('row_faculty_qualification').style.display = 'block';
        document.getElementById('employee_regular_salay').style.display = 'none';
    } else if(f_type == 'R'){
        document.getElementById('row_faculty_qualification').style.display = 'none';
        document.getElementById('employee_regular_salay').style.display = 'block';
    } else {
        document.getElementById('row_faculty_qualification').style.display = 'none';
        document.getElementById('employee_regular_salay').style.display = 'none';
    }
}

function  calulateButton() {

    var employee_number = document.getElementById('employee_number').value;
    var employee_name = document.getElementById('employee_name').value;
    var employee_department = document.getElementById('employee_department').value;
    var employee_hours_worked = document.getElementById('employee_hours_worked').value;
    var employee_type = document.getElementById('employee_type').value;


    //Allowance Calculation

    if (employee_type == 'F'){          // For Faculties
        var qualification_type = document.getElementById('qualification_type').value;
        if(qualification_type == 'M'){       // With Master's
            allowance = faculty_masters_allowance;
            wage_paid = employee_hours_worked*faculty_masters_rate;
        } else{       // With Bachelor's
            allowance = faculty_bachelors_allowance;
            wage_paid = employee_hours_worked*faculty_bachelors_rate;
        }
    } else{      // Regular Employees
        allowance = 0; // Regular Employees get no allowance
        
        fixed_salary = document.getElementById('fixed_salary').value;
        employee_regular_hourly_rate = (fixed_salary/160);

        if (employee_hours_worked == 160){
            wage_paid=fixed_salary;
        }else if(employee_hours_worked<160){
            wage_paid = employee_regular_hourly_rate*employee_hours_worked;
        }else{
            overtime = employee_hours_worked-160;
            wage_paid = fixed_salary + 2*employee_regular_hourly_rate*overtime;
        }
    }

    gross_income = allowance + wage_paid;

    if (gross_income > 3000){
        health_surcharge_fee = 33;
    } else{
        health_surcharge_fee = 19.20;
    }
    
    
    if(gross_income < tax_free_allowance){
        income_tax=0;
    } else{
        income_tax = gross_income*canadian_income_tax;
    }

    net_income = gross_income - income_tax - health_surcharge_fee;
    console.log("hello");

    alert(
        "Employee Name: "+employee_name+"\n"+
        "Employee Number: "+employee_number+"\n"+
        "Department: "+employee_department+"\n"+
        "Gross Income: $"+gross_income+"\n"+
        "Income Tax: $"+income_tax+"\n"+
        "Net Income: $"+net_income
    );
}