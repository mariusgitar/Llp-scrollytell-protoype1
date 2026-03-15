const methodData = {
  intervju: {
    title: "Brukerintervju",
    story:
      "Teamet snakker med tre foreldre. Én sier: «Jeg trodde kurset var for foreldre som sliter.»",
    insight:
      "Utfordringen kan handle mindre om interesse og mer om hvordan kurset oppfattes. Stigma og innramming betyr mye.",
    note: "Intervjuer kan avdekke motivasjon, følelser og skjulte barrierer.",
    convergence:
      "Med denne innsikten kan teamet utforske hvordan språk og invitasjon påvirker hvem som føler seg truffet."
  },
  survey: {
    title: "Spørreundersøkelse",
    story:
      "En undersøkelse viser at mange foreldre synes kurset virker nyttig. Samtidig forklarer få hvorfor de ikke deltar.",
    insight:
      "Teamet får bred oversikt over mønstre, men mindre dybde i de konkrete årsakene.",
    note: "Spørreundersøkelser er nyttige for mønstre i skala, men ofte svakere på nyanser.",
    convergence:
      "Nå ser teamet et tydeligere mønster i befolkningen, og kan velge hva de vil utforske dypere i neste steg."
  },
  experience: {
    title: "Basere seg på egen erfaring",
    story:
      "Teamet antar at tidspunkt er hovedproblemet. De diskuterer å endre timeplanen, men er ikke helt sikre.",
    insight:
      "Antakelser kan gi rask retning, men de er fortsatt antakelser.",
    note: "Intern erfaring kan være verdifull, men bør som regel utfordres eller testes.",
    convergence:
      "Teamet har et mulig spor å følge, og ser samtidig behovet for å sjekke antakelsen før større endringer."
  }
};

const optionButtons = document.querySelectorAll('.option-card');
const outcomeSection = document.getElementById('outcome');
const convergenceSection = document.getElementById('convergence');

const outcomeTitle = document.getElementById('outcome-title');
const outcomeStory = document.getElementById('outcome-story');
const outcomeInsight = document.getElementById('outcome-insight');
const outcomeNote = document.getElementById('outcome-note');
const convergenceText = document.getElementById('convergence-text');

function revealSection(section) {
  section.classList.remove('hidden');
  section.classList.add('revealed');
}

function selectMethod(methodKey) {
  const method = methodData[methodKey];
  if (!method) return;

  optionButtons.forEach((button) => {
    const isSelected = button.dataset.method === methodKey;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  outcomeTitle.textContent = method.title;
  outcomeStory.textContent = method.story;
  outcomeInsight.textContent = method.insight;
  outcomeNote.textContent = method.note;
  convergenceText.textContent = method.convergence;

  revealSection(outcomeSection);
  revealSection(convergenceSection);

  outcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectMethod(button.dataset.method);
  });
});
