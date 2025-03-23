# Startpage

Dies ist eine persönliche Startseite in HTML mit nützlichen Links und optionalem JavaScript. Sie ist dafür gedacht, lokal im Browser geöffnet zu werden, z. B. als Startseite in Firefox.

## Verwendung mit Firefox

Standardmäßig blockiert Firefox JavaScript in lokalen HTML-Dateien (file://). Um dies zu erlauben:

1. Öffne `about:config` in der Adresszeile von Firefox.
2. Akzeptiere die Warnung („Risiko akzeptieren und fortfahren“).
3. Suche nach `security.fileuri.strict_origin_policy`.
4. Setze den Wert auf `false`.

⚠️ **Achtung:** Diese Änderung kann potenzielle Sicherheitsrisiken mit sich bringen, wenn du andere lokale HTML-Dateien von unbekannter Herkunft öffnest. Verwende diese Einstellung nur, wenn du den Inhalt deiner lokalen Dateien kennst und vertraust.

## Verwendung

1. Klone dieses Repository:
```bash
git clone https://github.com/funkykay/startpage.git
```

2. Öffne die Datei index.html im Browser (z. B. mit Drag & Drop in Firefox).

Optional kannst du die Seite als Startseite festlegen:

- Einstellungen > Startseite > Startseiten und neue Fenster > Benutzerdefinierte URL… > Lokaler Pfad zur HTML-Datei

---

Viel Spaß mit deiner Startseite!
