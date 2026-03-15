const learnData = {
  intervju: {
    title: 'Brukerintervju',
    story:
      'Teamet snakker med tre foreldre. Én sier: «Jeg trodde kurset var for foreldre som sliter.»',
    insight:
      'Utfordringen kan handle mindre om interesse og mer om hvordan kurset oppfattes. Stigma og innramming betyr mye.',
    note: 'Intervjuer avdekker motivasjon, følelser og skjulte barrierer.',
    bridge:
      'Intervjuene ga konkrete ord og historier fra foreldre. Nå vil teamet lage noe som møter akkurat disse opplevelsene.'
  },
  survey: {
    title: 'Spørreundersøkelse',
    story:
      'En undersøkelse viser at mange foreldre synes kurset virker nyttig. Samtidig forklarer få hvorfor de ikke deltar.',
    insight:
      'Teamet får bred oversikt over mønstre, men mindre dybde i de konkrete årsakene.',
    note: 'Spørreundersøkelser er nyttige for mønstre i skala, men ofte svakere på nyanser.',
    bridge:
      'Tallene peker på et tydelig mønster i kommunen. Nå vil teamet lage et første grep som kan forbedre deltakelsen raskt.'
  },
  experience: {
    title: 'Basere seg på egen erfaring',
    story:
      'Teamet antar at tidspunkt er hovedproblemet. De diskuterer å endre timeplanen, men er ikke helt sikre.',
    insight: 'Antakelser kan gi rask retning, men de er fortsatt antakelser.',
    note: 'Intern erfaring kan være verdifull, men bør utfordres eller testes tidlig.',
    bridge:
      'Teamet har et mulig spor og vil lage en enkel løsning de raskt kan teste for å sjekke om antakelsen stemmer.'
  }
};

const lageData = {
  invitasjon: {
    title: 'Ny måte å invitere foreldre på',
    baseStory:
      'Teamet lager en ny invitasjon i enklere språk, med tydelig nytte og en vennlig tone.',
    note: 'Konseptet er lett å teste raskt i ulike kanaler.',
    directionByLearn: {
      intervju:
        'Invitasjonen bygger på foreldrenes egne ord fra intervjuene og normaliserer at kurset er for alle.',
      survey:
        'Invitasjonen målrettes mot de gruppene som svarte lavest i undersøkelsen, med tydelig informasjon om tid og format.',
      experience:
        'Invitasjonen fokuserer på fleksibilitet i tidspunkt siden teamets erfaring peker på tid som mulig barriere.'
    }
  },
  pilot: {
    title: 'En enklere pilotversjon av kurset',
    baseStory:
      'Teamet lager en kort pilot med færre temaer og lav terskel for å delta første gang.',
    note: 'En liten pilot gjør det enklere å justere før større utrulling.',
    directionByLearn: {
      intervju:
        'Piloten legger inn trygg introduksjon og tydelig forventningsavklaring basert på det foreldrene fortalte.',
      survey:
        'Piloten settes opp med tidspunkt og format som treffer mønstrene i undersøkelsen best mulig.',
      experience:
        'Piloten prøver et nytt tidspunkt først, slik at teamet kan undersøke antakelsen i praksis.'
    }
  },
  samskaping: {
    title: 'En samskapingsøkt med foreldre',
    baseStory:
      'Teamet inviterer foreldre og ansatte til en kort samskapingsøkt for å forme tilbudet sammen.',
    note: 'Samskaping bygger eierskap og gir bedre forankring i behovene.',
    directionByLearn: {
      intervju:
        'Økten starter med temaene som kom frem i intervjuene og lar foreldrene prioritere hva som er viktigst.',
      survey:
        'Økten bruker funnene fra undersøkelsen som utgangspunkt og går dypere i hvorfor mønstrene oppstår.',
      experience:
        'Økten utfordrer teamets antakelser direkte ved å la foreldre reagere på dagens kursopplegg.'
    }
  }
};

const state = {
  learnChoice: null,
  lageChoice: null
};

const learnButtons = document.querySelectorAll('[data-learn-method]');
const lageButtons = document.querySelectorAll('[data-lage-method]');

const learnOutcomeSection = document.getElementById('learn-outcome');
const learnOutcomeTitle = document.getElementById('learn-outcome-title');
const learnOutcomeStory = document.getElementById('learn-outcome-story');
const learnOutcomeInsight = document.getElementById('learn-outcome-insight');
const learnOutcomeNote = document.getElementById('learn-outcome-note');

const transitionSection = document.getElementById('to-lage');
const transitionText = document.getElementById('to-lage-text');
const lageChoiceSection = document.getElementById('lage-choice');

const lageOutcomeSection = document.getElementById('lage-outcome');
const lageOutcomeTitle = document.getElementById('lage-outcome-title');
const lageOutcomeStory = document.getElementById('lage-outcome-story');
const lageOutcomeConcept = document.getElementById('lage-outcome-concept');
const lageOutcomeNote = document.getElementById('lage-outcome-note');

const summarySection = document.getElementById('summary');
const summaryLearn = document.getElementById('summary-learn');
const summaryLage = document.getElementById('summary-lage');
const summaryDirection = document.getElementById('summary-direction');

const proveTeaserSection = document.getElementById('prove-teaser');

function revealSection(section) {
  section.classList.remove('hidden');
  section.classList.add('revealed');
}

function hideSection(section) {
  section.classList.add('hidden');
  section.classList.remove('revealed');
}

function renderLearnOutcome(learnKey) {
  const learnChoice = learnData[learnKey];
  if (!learnChoice) return;

  learnOutcomeTitle.textContent = learnChoice.title;
  learnOutcomeStory.textContent = learnChoice.story;
  learnOutcomeInsight.textContent = learnChoice.insight;
  learnOutcomeNote.textContent = learnChoice.note;
  transitionText.textContent = learnChoice.bridge;

  revealSection(learnOutcomeSection);
  revealSection(transitionSection);
  revealSection(lageChoiceSection);
}

function renderLageOutcome(learnKey, lageKey) {
  const learnChoice = learnData[learnKey];
  const lageChoice = lageData[lageKey];
  if (!learnChoice || !lageChoice) return;

  const conceptDirection = lageChoice.directionByLearn[learnKey];

  lageOutcomeTitle.textContent = lageChoice.title;
  lageOutcomeStory.textContent = lageChoice.baseStory;
  lageOutcomeConcept.textContent = conceptDirection;
  lageOutcomeNote.textContent = lageChoice.note;

  summaryLearn.textContent = learnChoice.title;
  summaryLage.textContent = lageChoice.title;
  summaryDirection.textContent = conceptDirection;

  revealSection(lageOutcomeSection);
  revealSection(summarySection);
  revealSection(proveTeaserSection);
}

function resetLageFlow() {
  state.lageChoice = null;
  lageButtons.forEach((button) => {
    button.classList.remove('selected-lage');
    button.setAttribute('aria-pressed', 'false');
  });

  hideSection(lageOutcomeSection);
  hideSection(summarySection);
  hideSection(proveTeaserSection);
}

learnButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const learnKey = button.dataset.learnMethod;
    state.learnChoice = learnKey;

    learnButtons.forEach((learnButton) => {
      const selected = learnButton.dataset.learnMethod === learnKey;
      learnButton.classList.toggle('selected', selected);
      learnButton.setAttribute('aria-pressed', String(selected));
    });

    renderLearnOutcome(learnKey);
    resetLageFlow();

    learnOutcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

lageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!state.learnChoice) return;

    const lageKey = button.dataset.lageMethod;
    state.lageChoice = lageKey;

    lageButtons.forEach((lageButton) => {
      const selected = lageButton.dataset.lageMethod === lageKey;
      lageButton.classList.toggle('selected-lage', selected);
      lageButton.setAttribute('aria-pressed', String(selected));
    });

    renderLageOutcome(state.learnChoice, lageKey);
    lageOutcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
