var birth_year = prompt("Enter the year");
var current_year = prompt("Enter current year");
var age_years = current_year - birth_year
var age_months = (current_year - birth_year) * 12
var age_days = (current_year - birth_year) * 365
var age_weeks = (current_year - birth_year) * 48

console.log("Age in years: ", age_years);
console.log("Age in months: ", age_months);
console.log("Age in weeks: ", age_weeks);
console.log("Age in days: ", age_days);

VM110:8 Age in years:  1993
VM110:9 Age in months:  23916
VM110:10 Age in weeks:  95664
VM110:11 Age in days:  727445