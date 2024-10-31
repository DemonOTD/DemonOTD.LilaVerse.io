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