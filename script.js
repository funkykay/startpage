"use strict";

async function createLinkBoxes() {
    try {
        // Warte, bis die Daten geladen wurden
        let response = await fetch("links.json");
        let categories = await response.json();

        const container = document.getElementById("link-section");

        if (!container) {
            console.error("Fehler: Container mit ID 'link-section' nicht gefunden.");
            return;
        }

        categories.forEach(category => {
            // Link-Box erstellen
            const box = document.createElement("div");
            box.classList.add("link-box");

            // Überschrift hinzufügen
            const title = document.createElement("h2");
            title.textContent = category.title;
            box.appendChild(title);

            // Liste für Links erstellen
            const list = document.createElement("ul");

            category.links.forEach(link => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = link.url;
                anchor.textContent = link.name;
                anchor.target = "_blank"; // Links in neuem Tab öffnen
                listItem.appendChild(anchor);
                list.appendChild(listItem);
            });

            box.appendChild(list);
            container.appendChild(box);
        });
    } catch (error) {
        console.error("Fehler beim Laden der Links:", error);
    }
}

(function () {
    console.log("Welcome to my startpage.");

    document.addEventListener("DOMContentLoaded", function () {
        createLinkBoxes();
    });   
})();
