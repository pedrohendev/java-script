const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade =  '30';
const peso = '84';
const alturaEmCm = '1.80';
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm); // peso / (alturaEmCm * alturaEmCm)
let anoNascimento = 2024 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

// Template string
// + 
