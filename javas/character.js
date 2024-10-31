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

// Function to display traits
function displayTraits(verse) {
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

// Function to select and save the verse, then display traits
function selectVerse(verse) {
    saveCharacterData('verse', verse); // Store the verse in localStorage
    displayTraits(verse); // Display the special traits for the selected verse
}

// Function to navigate to the next page
function goToNextPage() {
    window.location.href = "ChooseSpecies.html"; // Update with the path to the next page
}