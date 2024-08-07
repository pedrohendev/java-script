function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      relogio.style.color = `black`;
      segundos = 0;
    }

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
      relogio.style.color = `black`;
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
      relogio.style.color = `red`;
    }
  });
}
relogio();
