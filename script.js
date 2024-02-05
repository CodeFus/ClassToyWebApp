// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Buttons for each word category
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');

// Displays for chosen words
const chosenNoun1Display = document.getElementById('chosenNoun1');
const chosenVerbDisplay = document.getElementById('chosenVerb');
const chosenAdjectiveDisplay = document.getElementById('chosenAdjective');
const chosenNoun2Display = document.getElementById('chosenNoun2');
const chosenSettingDisplay = document.getElementById('chosenSetting');

// Buttons for story generation
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');
const storyDisplay = document.getElementById('story');

// Arrays containing words for story generation
const nouns1 = ["dog", "cat", "bird", "tree", "mountain"];
const verbs = ["runs", "jumps", "flies", "sings", "swims"];
const adjectives = ["happy", "sad", "colorful", "quiet", "exciting"];
const nouns2 = ["car", "book", "computer", "guitar", "house"];
const settings = ["beach", "forest", "city", "space", "castle"];

// Counters to keep track of selected words
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions
-------------------------------------------------- */
// Event handler functions for button clicks
function noun1_on_click() {
    chosenNoun1Display.textContent = nouns1[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1.length;
}

function verb_on_click() {
    chosenVerbDisplay.textContent = verbs[countVerb];
    countVerb = (countVerb + 1) % verbs.length;
}

function adjective_on_click() {
    chosenAdjectiveDisplay.textContent = adjectives[countAdjective];
    countAdjective = (countAdjective + 1) % adjectives.length;
}

function noun2_on_click() {
    chosenNoun2Display.textContent = nouns2[countNoun2];
    countNoun2 = (countNoun2 + 1) % nouns2.length;
}

function setting_on_click() {
    chosenSettingDisplay.textContent = settings[countSetting];
    countSetting = (countSetting + 1) % settings.length;
}

function playback_on_click() {
    // Generate and display a story based on selected words
    const spellEffect = "<span class='spell-effect'>$1</span>";
    const storyText = `Once upon a time, there was a ${chosenNoun1Display.textContent.replace(/(\S+)/g, spellEffect)} who ${chosenVerbDisplay.textContent.replace(/(\S+)/g, spellEffect)} in a ${chosenAdjectiveDisplay.textContent.replace(/(\S+)/g, spellEffect)} ${chosenSettingDisplay.textContent.replace(/(\S+)/g, spellEffect)}. One day, the ${chosenNoun1Display.textContent.replace(/(\S+)/g, spellEffect)} found a ${chosenNoun2Display.textContent.replace(/(\S+)/g, spellEffect)} and decided to ${chosenVerbDisplay.textContent.replace(/(\S+)/g, spellEffect)} with it. They had a ${chosenAdjectiveDisplay.textContent.replace(/(\S+)/g, spellEffect)} time together in the ${chosenSettingDisplay.textContent.replace(/(\S+)/g, spellEffect)}. *The end*`;
    storyDisplay.innerHTML = storyText;
}

function random_on_click() {
    // Generate and display a random story
    const spellEffect = "<span class='spell-effect'>$1</span>";
    const randomStory = `Once upon a time, there was a ${getRandomElement(nouns1).replace(/(\S+)/g, spellEffect)} who ${getRandomElement(verbs).replace(/(\S+)/g, spellEffect)} in a ${getRandomElement(adjectives).replace(/(\S+)/g, spellEffect)} ${getRandomElement(settings).replace(/(\S+)/g, spellEffect)}. One day, the ${getRandomElement(nouns1).replace(/(\S+)/g, spellEffect)} found a ${getRandomElement(nouns2).replace(/(\S+)/g, spellEffect)} and decided to ${getRandomElement(verbs).replace(/(\S+)/g, spellEffect)} with it. They had a ${getRandomElement(adjectives).replace(/(\S+)/g, spellEffect)} time together in the ${getRandomElement(settings).replace(/(\S+)/g, spellEffect)}. *The end*`;
    storyDisplay.innerHTML = randomStory;
}

function getRandomElement(array) {
    // Function to get a random element from an array
    return array[Math.floor(Math.random() * array.length)];
}

// Reset button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset_on_click);

function reset_on_click() {
    // Clear the chosen word displays
    chosenNoun1Display.textContent = "";
    chosenVerbDisplay.textContent = "";
    chosenAdjectiveDisplay.textContent = "";
    chosenNoun2Display.textContent = "";
    chosenSettingDisplay.textContent = "";

    // Clear the story display
    storyDisplay.innerHTML = "";
}


/* Event Listeners
-------------------------------------------------- */
// Attach event listeners to buttons
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);

playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);




