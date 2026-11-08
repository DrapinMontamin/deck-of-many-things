const cards = [
    {
        name: "La Balance",
        picture: "cards/Balance.jpg",
        same:[false,null], //Les Deux descriptions sont les mêmes
        dnd: "", //Effet D&D
        dh: "", //Effet Daggerheart
        isVisible: false //Si la carte est retournée ou non, il suffira de cliquer sur un bouton pour mélanger le paquet avec toute les cartes de base.
    },
    {
        name: "Le Bandit",
        picture: "cards/Rogue.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Bouffon",
        picture: "cards/Jester.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Chevalier",
        picture: "cards/Knight.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "La Clé",
        picture: "cards/Key.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "La Comète",
        picture: "cards/Comet.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Crâne",
        picture: "cards/Skull.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Donjon",
        picture: "cards/Donjon.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "L'Etoile",
        picture: "cards/Star.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "L'Euryale",
        picture: "cards/Euryale.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Les Flammes",
        picture: "cards/Flames.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Fou",
        picture: "cards/Fool.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "La Gemme",
        picture: "cards/Gem.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "La Lune",
        picture: "cards/Moon.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Destin (Les Parques)",
        picture: "cards/Fates.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "La Ruine",
        picture: "cards/Ruin.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Les Serres",
        picture: "cards/Talons.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Soleil",
        picture: "cards/Sun.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Trône",
        picture: "cards/Throne.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Vide",
        picture: "cards/Void.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "Le Vizir",
        picture: "cards/Vizier.jpg",
        same:[false,null],
        dnd: "",
        dh: "",
        isVisible: false
    },
    {
        name: "L'Idiot",
        picture: "cards/Idiot.jpg",
        same:[false,null],
        dnd: "Réduit de façon permanente votre Intelligence ou votre Sagesse selon les correspondances suivantes (lancez 1D4) :\n- 1 : Votre valeur d'Intelligence diminue de 2;\n- 2 : Votre valeur de Sagesse diminue de 2;\n- 3 : Vos valeurs d'Intelligence et de Sagesse diminuent de 1 chacune\n- 4 : Votre valeur d'Intelligence ou de Sagesse diminue de 2, celle qui n'a pas était choisi diminue de 2.\nVous pouvez piocher une carte en plus du chiffre annoncé.",
        dh: "",
        isVisible: false
    },
    {
        name: "L'Enigme",
        picture: "cards/Idiot.jpg",
        same:[true,"dh"],
        dnd: "Réduit de façon permanente votre Intelligence ou votre Sagesse selon les correspondances suivantes (lancez 1D4) : . Vous pouvez piocher une carte en plus du chiffre annoncé.",
        dh: "Vous vous retrouvez téléporté dans une petite salle blanche dans laquelle se trouve uniquement une table et deux chaises, chacune d'un côté de la table. Sur l'une de ces chaises est assis un homme vêtu de noir portant un masque au motif de damier noir et blanc. Son énigme doit être résolue pour ressortir d'ici. Si l'énigme n'est pas résolue au bout de trois essais, l'homme masqué disparaît, son masque et sa cape tombent au sol. Vous êtes alors condamné à poser les énigmes jusqu'à ce que quelqu'un échoue comme vous, et ce jour là vous retournerez dans le monde réel après tout le temps passé.",
        isVisible: false
    },
    {
        name: "L'Inutile",
        picture: "cards/f.jpg",
        same:[false,null],
        dnd: "Cette carte n'a aucun effet.",
        dh: "Vous vous sentez très vexez.",
        isVisible: false
    }
];