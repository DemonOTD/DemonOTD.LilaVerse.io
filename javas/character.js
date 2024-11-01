let character = {
    hitpoints:null,
    verse: null,
    subVerse: null,
    species: null,
    class: null,
    speed: null,
    initiative: null,
    level: 0,
    characterName: null,
    armorClass: 0,
    proficencyBonus: false,
    abilityScore: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    abilityModifier: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    savingThrows: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    skills:{
        Acrobatics: 0,
        AnimalHandling: 0,
        Arcana: 0 ,
        Athletics: 0,
        Deception: 0,
        History: 0,
        Insight: 0,
        Intimidation: 0,
        Investigation: 0,
        Medicine: 0,
        Nature: 0,
        Perception: 0,
        Performance: 0,
        Persuasion: 0,
        Religion: 0,
        SleightofHand: 0,
        Stealth: 0,
        Survival: 0,
        Humanity: 0, //For the CyberVerse Class
        Love: 0 //For the MagicaVerse Class 
    },
    equipment: []
};

function saveCharacterData(key, value) {
    // Update character object and save to localStorage
    character[key] = value;
    localStorage.setItem('character', JSON.stringify(character));
}

function loadCharacterData() {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
        character = JSON.parse(savedCharacter);
    }
}

function logCharacterData() {
    const savedCharacter = localStorage.getItem("character");
    if (savedCharacter) {
        const character = JSON.parse(savedCharacter);
        console.log("Character Data:", character);
    } else {
        console.log("No character data found.");
    }
}

function clearCharacterData() {
    localStorage.removeItem('character');
    character = {}; // Reset object
}

// Load existing character data (if any)
loadCharacterData();

// Verse traits data
const verseTraits = {
    CyberVerse: ["Cybernetic Augmentation ", "Advanced Technology", "+ Medicine", "+ 2 Proficencies"],
    DystopianVerse:[],
    MagicaVerse: ["Magic Transformation", "The Power of Friendship", "+ Arcana & Religion", "+ 1 Proficency"],
    ModernVerse:[],
    TimeVerse: {
        Vikings: ["Time Warped", "Sons of The Old Gods", "+ History & Intimidation", "+ 1 Proficency"],
        Crusader: ["Time Warped", "Sons of The New God", "+ History & Persausion", "+ 1 Proficency"]
    }
    // Add more verses and traits as needed
};

// Species traits data
const speciesTraits = {
    Human: ["Adaptability", "30ft Movement"],
    Demon: ["Battle Resilience", "30ft Movement"],
    Anthro: {
        Wolf: ["Keen Senses", "30ft Movement"],
        Cat: ["Hastened Reflexes", "40ft Movement"]
    }

    // Add more species and their traits as needed
};

const verseClasses = {
    CyberVerse: ["Brawler", "Medic", "Hacker"],
    DystopianVerse: [],
    MagicaVerse: ["Heart", "Protection", "Sacrifice"],
    ModernVerse: [],
    TimeVerse: { 
        Vikings: ["Hunter", "Berserker", "Shaman"],
        Crusader: ["Paladin", "Cavilry", "Preist"]
    }
}

const classLevels = {
    Brawler: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Medic: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Hacker: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    DBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    DBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    DBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Heart: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Protection: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Sacrifice: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    MBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    MBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    MBlank: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Hunter: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Berserker: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Shaman: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Paladin: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Cavilry: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
    Priest: {
        1: [], 2: [], 3: [], 4: [], 5: [],
        6: [], 7: [], 8: [], 9: [], 10: [],
        11: [], 12: [], 13: [], 14: [], 15: [],
        16: [], 17: [], 18: [], 19: [], 20: [],
    },
}

// Function to display traits
function displayVerseTraits(verse) {
    const traitsContainer = document.getElementById("traitsContainer");
    const traits = verseTraits[verse];
    
    // Clear previous traits
    traitsContainer.innerHTML = "";

    // Display selected traits
    traits.forEach(trait => {
        const traitElement = document.createElement("li");
        traitElement.textContent = trait;
        traitsContainer.appendChild(traitElement);
    });
}

// Function to display species traits
function displaySpeciesTraits(species) {
    const traitsContainer = document.getElementById("speciesTraitsContainer");
    const traits = speciesTraits[species];
    
    // Clear previous traits
    traitsContainer.innerHTML = "";

    // Display selected traits
    traits.forEach(trait => {
        const traitElement = document.createElement("li");
        traitElement.textContent = trait;
        traitsContainer.appendChild(traitElement);
    });
}

// Function to select and save the verse, then display traits
function selectVerse(verse) {
    saveCharacterData('verse', verse); // Store the verse in localStorage
    displayVerseTraits(verse); // Display the special traits for the selected verse
}

// Function to select and save the species, then display traits
function selectSpecies(species) {
    saveCharacterData('species', species); // Store the species in localStorage
    displaySpeciesTraits(species); // Display the special traits for the selected species
}

// Function to navigate to the next page
function goToNextPage(nextPageUrl) {
    window.location.href = nextPageUrl;
}