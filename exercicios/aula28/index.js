//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia} ${mes} ${ano} ${hora} ${min} ${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)

/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix*/

// /*const data = new Date(2019 /*Ano*/, 3 /*Mês*/, // 20 /*Dia*/, 15 /*Hora*/, 14 /*Minuto*/, 27 /*Segundo*/);*/

/*const data = new Date(2019, 3);// 3 = Abril // os mês se inicia do mês 0*/

/*const data = new Date(`2019-04-20 20:20:59.100`);
console.log(`Dia`, data.getDate())
console.log(`Mês`, data.getMonth() + 1) // Mês começa do zero
console.log(`Ano`, data.getUTCFullYear())
console.log(`Hora`, data.getHours())
console.log(`Min`, data.getMinutes())
console.log(`Seg`, data.getSeconds())
console.log(`Ms`, data.getMilliseconds())
console.log(`Dia da semana`, data.getDay()) // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now())*/