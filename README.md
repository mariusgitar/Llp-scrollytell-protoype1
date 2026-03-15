# LLP Quest – LÆRE + LAGE prototype

Dette er en liten, statisk prototype for å teste **scrollytelling-opplevelsen** i de to første fasene av metoden **Lære, Lage, Prøve (LLP)**.

Prototypen bruker én case:
- En kommune tilbyr foreldrekurs
- Oppmøtet er lavt
- Brukeren velger først en metode i **LÆRE**
- Deretter velger brukeren et første konsept i **LAGE**
- Valgene samles i en kort oppsummering før en teaser om neste steg: **PRØVE**

## Struktur i prototypen

1. Intro og problemforståelse (lav deltakelse på foreldrekurs)
2. **LÆRE** med tre valg:
   - Brukerintervju
   - Spørreundersøkelse
   - Basere seg på egen erfaring
3. Overgang fra innsikt til idéarbeid
4. **LAGE** med tre valg:
   - Ny måte å invitere foreldre på
   - En enklere pilotversjon av kurset
   - En samskapingsøkt med foreldre
5. Dynamisk resultat der LAGE-retningen påvirkes litt av valgt LÆRE-metode
6. Oppsummeringskort med valgte steg og konseptretning
7. Kort teaser om at neste steg er PRØVE

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

- **PRØVE-fasen:** Legg til en tredje valgseksjon der teamet velger hva de vil teste først, og vis hvilke læringsspørsmål testen skal svare på.
- **Flere case:** Flytt all tekst og alle valg inn i egne dataobjekter per case for gjenbruk av samme UI-mønster.
- **Enkel refleksjon:** Legg til et kort spørsmål etter oppsummeringen, som “Hva ville du testet først i PRØVE?”.
