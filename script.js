const cardButtons = document.querySelectorAll(".card");

cardButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Carte déjà retournée : afficher sa description
        if (button.dataset.flipped === "true") {
            const carte = button.carte;
            if (carte.same[0] === true) {
                alert(`${carte.name}\n\nDescription commune : ${carte[carte.same[1]]}`);
                return;
            } else {
                alert(`${carte.name}\n\nD&D : ${carte.dnd}\n\nDaggerheart : ${carte.dh}`);
                return;
            }
        }

        const dispo = cards.filter((carte) => !carte.isVisible);

        if (dispo.length === 0) {
            alert("Paquet épuisé");
            return;
        }

        const cardTaked = dispo[Math.floor(Math.random() * dispo.length)];
        cardTaked.isVisible = true;

        button.dataset.flipped = "true";
        button.carte = cardTaked;

        const img = button.querySelector("img");
        img.src = cardTaked.picture;
        img.alt = cardTaked.name;
    });
});