let character = {
    verse: null,
    species: null,
    class: null,
    abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
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

function clearCharacterData() {
    localStorage.removeItem('character');
    character = {}; // Reset object
}

// Load existing character data (if any)
loadCharacterData();

// Verse traits data
const verseTraits = {
    CyberVerse: ["High-tech gadgets", "Cybernetic enhancements", "Advanced hacking skills"],
    ModernVerse: ["Modern weaponry", "Strategic thinking", "Diplomacy skills"],
    MagicaVerse: ["Magic spells", "Mythical creatures", "Alchemy knowledge"]
    // Add more verses and traits as needed
};

// Species traits data
const speciesTraits = {
    Elf: ["Keen senses", "Enhanced agility", "Night vision"],
    Dwarf: ["Tough constitution", "Stonework knowledge", "Battle resilience"],
    Human: ["Adaptable", "Skilled negotiator", "Resourceful"]
    // Add more species and their traits as needed
};

const verseClasses = {
    CyberVerse: ["Hacker", "Techno-Warrior", "Cyber Mage"],
    ModernVerse: ["Detective", "Soldier", "Scientist"],
    FantasyVerse: ["Wizard", "Knight", "Ranger"]
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