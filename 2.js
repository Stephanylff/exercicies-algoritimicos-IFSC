var salary, percentage, new_salary;

salary = parseFloat(prompt("Digite o seu salário", "3000"));
percentage = parseFloat(prompt("Digite a porcentagem de aumento", "25"));

new_salary = salary * (1 + percentage / 100);

console.log("Novo salário:", new_salary);
alert("Novo salário: " + new_salary);
VM81:8 Novo salário: 3750