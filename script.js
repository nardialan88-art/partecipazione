const portaSx = document.querySelector('.porta.sx');
const portaDx = document.querySelector('.porta.dx');
const interno = document.querySelector('.interno');
const soundCrack = new Audio('sigillo_crack.mp3');
const soundSoffio = new Audio('vento_leggero.mp3'); // nuovo effetto leggero

function aggiornaInterno() {
  if (portaSx.classList.contains('aperta') && portaDx.classList.contains('aperta')) {
    interno.classList.add('visibile');
  } else {
    interno.classList.remove('visibile');
  }
}

const invito = document.getElementById('invito');
const crack = document.getElementById('crack');
const soffio = document.getElementById('soffio');

invito.addEventListener('click', async () => {
  try {
    // Avvia il suono del sigillo
    crack.currentTime = 0;
    await crack.play();
    setTimeout(() => crack.pause(), 3000); // dura 3s

    // Avvia l’apertura con un piccolo ritardo
    setTimeout(() => {
      invito.classList.add('aperto');
    }, 600);

    // Avvia il suono del soffio dopo 2.5s
    setTimeout(async () => {
      soffio.currentTime = 0;
      await soffio.play();
      setTimeout(() => soffio.pause(), 3000); // dura 3s
    }, 2500);
  } catch (err) {
    console.log("Audio bloccato dal browser finché non si clicca:", err);
  }
});
