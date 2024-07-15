function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = `Domingo`;
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = `Segunda`;
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = `Terça`;
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = `Quarta`;
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = `Quinta`;
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = `Sexta`;
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = `Sábado`;
      return diaSemanaTexto;
    default:
      return (diaSemanaTexto = ``);
  }
}

const data = new Date(`1987-04-21 00:00:00`);
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

/*
switch (diaSemanda) {
  case 0:
    diaSemandaTexto = `Domingo`;
    break;
  case 1:
    diaSemandaTexto = `Segunda`;
    break;
  case 2:
    diaSemandaTexto = `Terça`;
    break;
  case 3:
    diaSemandaTexto = `Quarta`;
    break;
  case 4:
    diaSemandaTexto = `Quinta`;
    break;
  case 5:
    diaSemandaTexto = `Sexta`;
    break;
  case 6:
    diaSemandaTexto = `Sábado`;
    break;
  default:
    diaSemandaTexto = ``;
}
*/

/*if (diaSemanda === 0) {
  diaSemandaTexto = `domingo`;
} else if (diaSemanda === 1) {
  diaSemandaTexto = `segunda`;
} else if (diaSemanda === 2) {
  diaSemandaTexto = `terça`;
} else if (diaSemanda === 3) {
  diaSemandaTexto = `quarta`;
} else if (diaSemanda === 4) {
  diaSemandaTexto = `quinta`;
} else if (diaSemanda === 5) {
  diaSemandaTexto = `sexta`;
} else if (diaSemanda === 6) {
  diaSemandaTexto = `sábado`;
} else {
    diaSemandaTexto = ``;
}*/

console.log(diaSemana, diaSemanaTexto);
