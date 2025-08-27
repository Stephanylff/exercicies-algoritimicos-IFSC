var A = prompt("Digite o valor de A:");
var B = prompt("Digite o valor de B:");

// Troca os valores usando uma variável temporária
var temp = A;
A = B;
B = temp;

// Mostra o resultado
alert("Após a troca:\nA = " + A + "\nB = " + B);
console.log("Após a troca:");
console.log("A =", A);
console.log("B =", B);
VM65:11 Após a troca:
VM65:12 A = 60
VM65:13 B = 20