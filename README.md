# LLP Quest – LÆRE + LAGE prototype

Dette er en statisk POC i HTML, CSS og vanilla JavaScript for å teste en mer levende **editorial scrollytelling**-opplevelse i LLP Quest.

## Hva som er endret

- Prototypen er bygget om til en tydeligere scrollytelling-reise med nesten fullskjerms seksjoner.
- Problemfasen bruker sticky scene-panel + tekstblokker som bygger narrativet stegvis.
- LÆRE og LAGE er fortsatt enkle valgkort, men valgene oppdaterer en sticky statuslinje underveis.
- Overgangen mellom LÆRE og LAGE er gjort tydeligere med egen visuell overgangsseksjon.
- Outcome i LAGE har en grunntekst + en liten variasjon basert på valgt metode i LÆRE.
- Lette motion-grep er lagt inn med:
  - reveal-animasjoner via `IntersectionObserver`
  - subtile parallax-lag på dekorative bakgrunnsformer

## Hvordan POC-en er bygd opp

- `index.html`
  - Semantisk struktur med hero, problem-scene, LÆRE, overgang, LAGE og oppsummering.
  - Sticky scene-paneler og sticky status-chip for valg.
- `style.css`
  - CSS custom properties for farger, spacing, radius og skygge.
  - Responsive layout som bruker sticky på desktop og en enklere lineær flyt på mobil.
- `script.js`
  - Enkel state:
    ```js
    const state = {
      learnChoice: null,
      makeChoice: null
    };
    ```
  - Valg- og outcome-data i objekter.
  - `IntersectionObserver` for reveal og aktive problemsteg.
  - Lett parallax med `requestAnimationFrame`-drevet scroll-oppdatering.

## Kjør lokalt

Åpne `index.html` direkte, eller start en enkel lokal server:

```bash
python3 -m http.server 8000
```

Åpne deretter `http://localhost:8000`.

## Neste steg hvis testen fungerer

1. Legg til 1–2 alternative case i samme datastruktur for å teste gjenbruk.
2. Utvid med en enkel PRØVE-teaser med ett testvalg (uten tung branching).
3. Kjør raske brukertester for å validere om sticky scene + statuslinje faktisk gjør reisen tydeligere.
4. Finjuster språk og mikrotekst i valg/outcomes basert på testobservasjoner.
