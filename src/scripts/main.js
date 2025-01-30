AOS.init();

const dataAniversario = new Date("oct 28 2025 19:00:00");
const timeStampEvent = dataAniversario.getTime();

const contaHoras = setInterval(function () {
	const agora = new Date();
	const timeStempAtual = agora.getTime();
	const diferencaTempo = timeStampEvent - timeStempAtual;
	const diaEmMS = 1000 * 60 * 60 * 24;
	const horaEmMS = 1000 * 60 * 60;
	const minutoEmMS = 1000 * 60;
	const dia = Math.floor(diferencaTempo / diaEmMS);
	const hora = Math.floor((diferencaTempo % diaEmMS) / horaEmMS);
	const minuto = Math.floor((diferencaTempo % horaEmMS) / minutoEmMS);
	const segundo = Math.floor((diferencaTempo % minutoEmMS) / 1000);

	document.getElementById("contador").innerHTML = `${dia}d ${hora}h ${minuto}m ${segundo}s`;
}, 1000);
