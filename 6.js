var comprimento = prompt("Digite o comprimento da caixa (em metros):");
var largura = prompt("Digite a largura da caixa (em metros):");
var altura = prompt("Digite a altura da caixa (em metros):");

// Converte os valores para número
comprimento = Number(comprimento);
largura = Number(largura);
altura = Number(altura);

// Calcula o volume
var volume = comprimento * largura * altura;

// Mostra o resultado
alert("O volume da caixa é: " + volume + " m³");
console.log("O volume da caixa é: " + volume + " m³");

VM63:16 O volume da caixa é: 20 m³