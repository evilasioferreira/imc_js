const nome = prompt('Seu nome:' )
const alt = parseFloat(prompt("Altura em cm: "))
const peso = parseFloat(prompt("Peso: "))

const altM = alt/100;

const imc = peso/(altM*altM)

let classificação;

if (imc < 16) {
    console.log('Baixo peso muito grave');
    classificação="Baixo peso muito grave";
}

else if (imc >= 16 && imc < 17) {
    console.log('Baixo peso grave');
    classificação="Baixo peso grave";
}

else if (imc >= 17 && imc < 18.50) {
    console.log('Baixo peso');
    classificação="Baixo peso";
}

else if (imc >= 18.50 && imc < 25) {
    console.log('Peso normal');
    classificação="Peso normal";
}

else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
    classificação="Sobrepeso";
}

else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau I');
    classificação="Obesidade grau I";
}

else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau II');
    classificação="Obesidade grau II";
}

else {
    console.log('Obesidade Grau III');
    classificação="Obesidade grau III";
}

alert(`${nome} tem de altura ${altM}m e peso ${peso}kg, está classificado como: ${classificação}.`)


