var pesoSaco = prompt("Digite o peso do saco de ração (em kg):");
var racaoPorGato = prompt("Digite a quantidade diária de ração por gato (em g):");

// Converte os valores para número
pesoSaco = Number(pesoSaco);
racaoPorGato = Number(racaoPorGato);

// Converte o peso do saco para gramas
var pesoSacoGramas = pesoSaco * 1000;

// Calcula o consumo total em 5 dias para 2 gatos
var consumoTotal = racaoPorGato * 2 * 5;

// Calcula o restante de ração
var restante = pesoSacoGramas - consumoTotal;

// Mostra o resultado
alert("Restante de ração após 5 dias: " + restante + " g");
console.log("Restante de ração após 5 dias: " + restante + " g");

VM67:20 Restante de ração após 5 dias: 29980 