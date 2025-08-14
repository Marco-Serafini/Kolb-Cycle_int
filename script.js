
const data = {
  esperienza: {
    title: "Esperienza",
    descrizione: "L’esperienza concreta è il punto di partenza del ciclo di Kolb. L’individuo vive direttamente un’attività pratica senza riflessione immediata.",
    esempi: [
      "Simulazioni pratiche",
      "Gestione di un cliente reale",
      "Attività sul campo"
    ],
    lavorativi: [
      "Gestione di una chiamata IT",
      "Servizio clienti in hotel",
      "Pratica operativa in banca"
    ],
    domande: [
      "Cosa è successo?",
      "Chi era coinvolto?",
      "Quali emozioni ho provato?"
    ],
    attivita: [
      "Role play",
      "On-the-job training",
      "Esperienze immersive"
    ],
    strumenti: [
      "Diario di bordo",
      "Osservazione diretta",
      "Feedback immediato"
    ]
  },
  riflessione: {
    title: "Riflessione",
    descrizione: "In questa fase si analizza l’esperienza vissuta, si riflette su cosa è accaduto e come ci si è sentiti. Si cerca di comprendere.",
    esempi: [
      "Debriefing dopo una simulazione",
      "Scrittura riflessiva",
      "Discussione guidata"
    ],
    lavorativi: [
      "Analisi di un reclamo ricevuto",
      "Feedback a fine giornata",
      "Retrospettiva di progetto"
    ],
    domande: [
      "Perché è accaduto questo?",
      "Come mi sono sentito?",
      "Cosa avrei potuto fare diversamente?"
    ],
    attivita: [
      "Focus group",
      "Interviste",
      "Analisi critica"
    ],
    strumenti: [
      "Griglie di riflessione",
      "Canvas",
      "Domande aperte"
    ]
  },
  concettualizzazione: {
    title: "Concettualizzazione",
    descrizione: "Si formulano concetti e teorie a partire dalla riflessione. Si cercano modelli, collegamenti e si costruisce conoscenza astratta.",
    esempi: [
      "Creazione di una mappa concettuale",
      "Studio di un modello teorico",
      "Lettura guidata"
    ],
    lavorativi: [
      "Standardizzare una procedura",
      "Formalizzare best practice",
      "Apprendere un metodo (es. Kanban, Six Sigma)"
    ],
    domande: [
      "Quali regole posso ricavare?",
      "Come posso spiegare ciò che è accaduto?",
      "A quali modelli si collega questa esperienza?"
    ],
    attivita: [
      "Studio di teoria",
      "Comparazione tra casi",
      "Costruzione di framework"
    ],
    strumenti: [
      "Diagrammi",
      "Teorie",
      "Toolkit"
    ]
  },
  sperimentazione: {
    title: "Sperimentazione",
    descrizione: "Si mettono alla prova le idee e i concetti appresi in nuove situazioni. È la fase dell’azione basata su quanto appreso.",
    esempi: [
      "Testare un nuovo approccio in aula",
      "Applicare un metodo in contesto diverso",
      "Elaborare un prototipo"
    ],
    lavorativi: [
      "Adottare un nuovo strumento IT",
      "Cambiare la comunicazione col cliente",
      "Introdurre un nuovo script nel servizio clienti"
    ],
    domande: [
      "Cosa posso provare di nuovo?",
      "Come posso migliorare la mia prossima esperienza?",
      "Cosa metto in pratica da ciò che ho imparato?"
    ],
    attivita: [
      "Project work",
      "Esperimenti controllati",
      "Simulazioni complesse"
    ],
    strumenti: [
      "Piani d’azione",
      "Checklist",
      "Pilota su piccola scala"
    ]
  }
};

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".tab-button");

function renderPhase(phase) {
  const d = data[phase];
  content.innerHTML = `
    <h2>${d.title}</h2>
    <h3>Descrizione</h3><p>${d.descrizione}</p>
    <h3>Esempi</h3><ul>${d.esempi.map(e => `<li>${e}</li>`).join('')}</ul>
    <h3>Esempi lavorativi</h3><ul>${d.lavorativi.map(e => `<li>${e}</li>`).join('')}</ul>
    <h3>Domande guida</h3><ul>${d.domande.map(e => `<li>${e}</li>`).join('')}</ul>
    <h3>Attività per l’apprendimento</h3><ul>${d.attivita.map(e => `<li>${e}</li>`).join('')}</ul>
    <h3>Strumenti & Azioni</h3><ul>${d.strumenti.map(e => `<li>${e}</li>`).join('')}</ul>
  `;
  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-phase="${phase}"]`).classList.add('active');
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => renderPhase(btn.dataset.phase));
});

renderPhase("esperienza");

const toggle = document.querySelector(".theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}


// Chart rendering
const ctx = document.getElementById('kolbChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Esperienza', 'Riflessione', 'Concettualizzazione', 'Sperimentazione'],
    datasets: [{
      data: [25, 30, 20, 25],
      backgroundColor: ['#1976d2', '#388e3c', '#fbc02d', '#d32f2f'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
