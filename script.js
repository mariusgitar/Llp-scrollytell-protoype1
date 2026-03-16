const learnOptions = {
  intervju: {
    title: 'Brukerintervju',
    insight:
      'Teamet hører at noen foreldre tror kurset er for dem som allerede har store utfordringer.',
    method: 'Direkte samtaler gir nyanser om motivasjon, språk og opplevde barrierer.',
    bridge: 'Intervjuene gir konkrete ord som teamet kan bruke når de former første løsning.'
  },
  survey: {
    title: 'Spørreundersøkelse',
    insight: 'Teamet ser mønstre i deltakelse, men får færre forklaringer på hvorfor oppmøtet er lavt.',
    method: 'Undersøkelser er raske for oversikt, men svakere på dybde.',
    bridge: 'Mønstrene fra undersøkelsen gir retning for hva som bør testes først.'
  },
  experience: {
    title: 'Basere seg på egen erfaring',
    insight: 'Teamet mistenker at tidspunkt og terskel for oppstart er hovedårsaker til lav deltakelse.',
    method: 'Intern erfaring kan være nyttig, men bør valideres så tidlig som mulig.',
    bridge: 'Erfaringssporet gir en rask hypotese som kan formes til en enkel første løsning.'
  }
};

const makeOptions = {
  invitasjon: {
    title: 'Ny måte å invitere foreldre på',
    base: 'Teamet lager en vennlig invitasjon med enklere språk og tydelig nytte.',
    note: 'Lav innsats, høy læring i tidlig test.',
    variationByLearn: {
      intervju: 'Språket bygger på ordvalg foreldre selv brukte i intervjuene.',
      survey: 'Invitasjonen målrettes mot grupper med lavest respons i undersøkelsen.',
      experience: 'Invitasjonen prioriterer fleksibilitet i tid siden teamet tror tidspunkt er nøkkelen.'
    }
  },
  pilot: {
    title: 'En enklere pilotversjon av kurset',
    base: 'Teamet lager en kort pilot med lav terskel og tydelig struktur fra første møte.',
    note: 'En liten pilot gjør det enklere å justere før større utrulling.',
    variationByLearn: {
      intervju: 'Piloten starter med trygg introduksjon som svar på opplevd stigma.',
      survey: 'Piloten legges til tidspunkt som matcher mønstrene i dataene.',
      experience: 'Piloten tester først teamets hypotese om tidsbarrierer.'
    }
  },
  samskaping: {
    title: 'En samskapingsøkt med foreldre',
    base: 'Teamet inviterer foreldre inn for å forme innhold, format og rammer sammen.',
    note: 'Samskaping bygger eierskap og forbedrer relevansen i tilbudet.',
    variationByLearn: {
      intervju: 'Samtaletemaene i økten bygger direkte på innsiktene fra intervjuene.',
      survey: 'Økten bruker surveyfunn som utgangspunkt for å grave i hvorfor-mønstrene.',
      experience: 'Økten brukes aktivt for å utfordre teamets egne antakelser.'
    }
  }
};

const state = {
  learnChoice: null,
  makeChoice: null
};

const learnButtons = document.querySelectorAll('[data-learn]');
const makeButtons = document.querySelectorAll('[data-make]');
const learnOutcome = document.getElementById('learn-outcome');
const transitionSection = document.getElementById('transition');
const transitionText = document.getElementById('transition-text');
const makeSection = document.getElementById('make');
const makeOutcome = document.getElementById('make-outcome');
const summarySection = document.getElementById('summary');
const restartButton = document.getElementById('restart');
const statusLearn = document.getElementById('status-learn');
const statusMake = document.getElementById('status-make');
const summaryLearn = document.getElementById('summary-learn');
const summaryMake = document.getElementById('summary-make');
const summaryResult = document.getElementById('summary-result');

function renderLearnChoice(learnKey) {
  const learn = learnOptions[learnKey];
  if (!learn) return;

  learnOutcome.innerHTML = `
    <p class="eyebrow">Valgt i LÆRE</p>
    <h3>${learn.title}</h3>
    <p>${learn.insight}</p>
    <p><strong>Metodemerknad:</strong> ${learn.method}</p>
  `;

  transitionText.textContent = learn.bridge;

  learnOutcome.classList.remove('hidden');
  transitionSection.classList.remove('hidden');
  makeSection.classList.remove('hidden');

  statusLearn.textContent = learn.title;
}

function renderMakeChoice() {
  const learn = learnOptions[state.learnChoice];
  const make = makeOptions[state.makeChoice];
  if (!learn || !make) return;

  const variation = make.variationByLearn[state.learnChoice];

  makeOutcome.innerHTML = `
    <p class="eyebrow">Valgt i LAGE</p>
    <h3>${make.title}</h3>
    <p>${make.base}</p>
    <p><strong>Variasjon fra LÆRE:</strong> ${variation}</p>
    <p><strong>Konsekvens:</strong> ${make.note}</p>
  `;

  makeOutcome.classList.remove('hidden');
  summarySection.classList.remove('hidden');

  statusMake.textContent = make.title;
  summaryLearn.textContent = learn.title;
  summaryMake.textContent = make.title;
  summaryResult.textContent = `${make.base} ${variation}`;
}

function resetMakeFlow() {
  state.makeChoice = null;
  statusMake.textContent = 'Ikke valgt';
  makeOutcome.classList.add('hidden');
  summarySection.classList.add('hidden');

  makeButtons.forEach((button) => {
    button.classList.remove('selected');
    button.setAttribute('aria-pressed', 'false');
  });
}

learnButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.learn;
    state.learnChoice = selected;

    learnButtons.forEach((item) => {
      const isSelected = item.dataset.learn === selected;
      item.classList.toggle('selected', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    renderLearnChoice(selected);
    resetMakeFlow();
    learnOutcome.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

makeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!state.learnChoice) return;

    const selected = button.dataset.make;
    state.makeChoice = selected;

    makeButtons.forEach((item) => {
      const isSelected = item.dataset.make === selected;
      item.classList.toggle('selected', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    renderMakeChoice();
    makeOutcome.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

restartButton.addEventListener('click', () => {
  state.learnChoice = null;
  statusLearn.textContent = 'Ikke valgt';
  learnOutcome.classList.add('hidden');
  transitionSection.classList.add('hidden');
  makeSection.classList.add('hidden');

  learnButtons.forEach((button) => {
    button.classList.remove('selected');
    button.setAttribute('aria-pressed', 'false');
  });

  resetMakeFlow();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));

const problemSection = document.querySelector('.problem-scroll');
const problemRange = document.querySelector('.problem-scroll-range');
const problemTrack = document.querySelector('[data-problem-track]');
const problemPanels = document.querySelectorAll('[data-problem-panel]');
const problemDots = document.querySelectorAll('[data-problem-dot]');
const problemProgressText = document.getElementById('problem-progress-text');
let mobileProblemObserver = null;
let mobileActiveProblemIndex = 0;

function setProblemProgress(activeIndex) {
  problemPanels.forEach((panel, index) => {
    panel.classList.toggle('is-active', index === activeIndex);
  });

  problemDots.forEach((dot, index) => {
    dot.classList.toggle('is-active', index === activeIndex);
  });

  if (problemProgressText) {
    problemProgressText.textContent = `${activeIndex + 1} / ${problemPanels.length}`;
  }
}

function setupMobileProblemObserver() {
  if (mobileProblemObserver || !problemPanels.length) return;

  // Mobilvarianten bruker IntersectionObserver for å holde ett tydelig aktivt steg om gangen.
  mobileProblemObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleEntries.length) return;

      const nextIndex = Array.from(problemPanels).indexOf(visibleEntries[0].target);
      if (nextIndex === -1 || nextIndex === mobileActiveProblemIndex) return;

      mobileActiveProblemIndex = nextIndex;
      setProblemProgress(mobileActiveProblemIndex);
    },
    {
      root: null,
      threshold: [0.35, 0.5, 0.7],
      rootMargin: '-18% 0px -28% 0px'
    }
  );

  problemPanels.forEach((panel) => mobileProblemObserver.observe(panel));
  setProblemProgress(mobileActiveProblemIndex);
}

function teardownMobileProblemObserver() {
  if (!mobileProblemObserver) return;
  mobileProblemObserver.disconnect();
  mobileProblemObserver = null;
}

function updateProblemScrollScene() {
  if (!problemSection || !problemRange || !problemTrack || !problemPanels.length) return;

  const isMobileLayout = window.matchMedia('(max-width: 700px)').matches;
  if (isMobileLayout) {
    setupMobileProblemObserver();
    problemTrack.style.transform = 'translateX(0)';
    setProblemProgress(mobileActiveProblemIndex);
    return;
  }

  teardownMobileProblemObserver();

  const rangeRect = problemRange.getBoundingClientRect();
  const maxScroll = Math.max(problemRange.offsetHeight - window.innerHeight, 1);
  const traveled = Math.min(Math.max(-rangeRect.top, 0), maxScroll);
  const progress = traveled / maxScroll;
  const maxTranslate = problemTrack.scrollWidth - window.innerWidth;
  const translateX = Math.max(0, progress * maxTranslate);

  // Horisontal track drives av hvor langt brukeren har scrollet i denne seksjonen.
  problemTrack.style.transform = `translateX(-${translateX}px)`;

  const activeIndex = Math.min(problemPanels.length - 1, Math.floor(progress * problemPanels.length));
  setProblemProgress(activeIndex);
}

updateProblemScrollScene();
window.addEventListener('scroll', updateProblemScrollScene, { passive: true });
window.addEventListener('resize', updateProblemScrollScene);

const parallaxLayers = document.querySelectorAll('[data-parallax]');
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  parallaxLayers.forEach((layer) => {
    const speed = Number(layer.dataset.parallax);
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
