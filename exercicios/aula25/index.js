/*
 entre 0 - 11: bom dia
 entre 12 - 17: boa tarde
 entre 18 - 23: boa noite
 */

// if pode ser usado sozinho
// sempre que utilozo a palavra else, preciso de um if antes
// eu posso ter varios else if na codição
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else


const hora = 432;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (/*se não*/ hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Digite um número entre 0 e 23!");
}

const tenhoGrana = true;
if (tenhoGrana) {
    console.log('vou sair de casa');
} else {
    console.log('não vou sair de casa');
}
