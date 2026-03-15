# LLP Quest – LÆRE prototype

Dette er en liten, statisk prototype for å teste **følelsen av “scrollytelling + quest”** i LÆRE-fasen av metoden **Lære, Lage, Prøve (LLP)**.

Prototypen viser én case:
- En kommune tilbyr foreldrekurs
- Oppmøtet er lavt
- Brukeren velger én læringsmetode
- Utfallet vises, før fortellingen samles igjen

Målet er rask validering av format og retning, ikke ferdig produkt.

## Kjør lokalt

Siden er ren HTML/CSS/JS og kan åpnes direkte i nettleser:

1. Last ned/klon repoet
2. Åpne `index.html`

For lokal server (anbefalt):

```bash
python3 -m http.server 8000
```

Gå til: `http://localhost:8000`

## Publiser med GitHub Pages

1. Push repoet til GitHub.
2. Gå til **Settings → Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (eller aktuell branch), folder: **/ (root)**
4. Lagre.
5. Vent til GitHub Pages bygger siden, og åpne URL-en som vises i Pages-innstillingene.

## Hvordan utvide senere

- **Flere faser (LAGE / PRØVE):** Legg til nye seksjoner eller egne sider med samme struktur, og før brukerens valg videre som enkle dataobjekter i JavaScript.
- **Flere case:** Flytt case-tekst og metoder inn i egne datafiler/objekter og render samme UI-mønster for ulike scenarioer.
- **Lettvekts feedback-loop:** Legg til et lite refleksjonsspørsmål etter utfall (f.eks. “Hva ville du testet nå?”) og lagre svar i en enkel form-løsning eller tredjeparts skjema.
