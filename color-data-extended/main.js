// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  } else if (selection === "name-search") {
    nameSearch();
  } else if (selection === "demonstrate-colors") {
    demonstrateColors();
  } else if (selection === "background-color") {
    changeBackgroundColor();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  outputEl.innerHTML = "<h3>Display All Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {

    outputEl.innerHTML += `<br> Name: ${colorData[i].name} Family: ${colorData[i].family}`;

  }
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "<h3>Display Bright Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >= 200) {
      outputEl.innerHTML += `<br> Name: ${colorData[i].name} Brightness: ${colorData[i].brightness}`;
    }

  }
}

function redPinkFamilies() {
  let redPinkNum = 0;
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = "<h3>Count Red/Pink Family Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red" || colorData[i].family === "Pink") {
      redPinkNum++;
    }
  }
  outputEl.innerHTML += `<br> Number of Colours in the Red/Pink Families: ${redPinkNum}`;
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
  let familyPrompt = prompt("Search By Family Name");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === familyPrompt) {
      outputEl.innerHTML += `<br> ${colorData[i].name} ${colorData[i].family}`;
    }
  }
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
  let letterPrompt = prompt("Search By First Letter");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name[0] === letterPrompt) {
      outputEl.innerHTML += `<br> ${colorData[i].name}`;
    }
  }
}

function nameSearch() {
  // Display all information corresponding to the searched color name
  outputEl.innerHTML = "<h3>Name Search</h3>";
  let namePrompt = prompt("Search By Name");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name === namePrompt) {
      outputEl.innerHTML += `<br> 
      Name: ${colorData[i].name} 
      Family: ${colorData[i].family} 
      Hex: ${colorData[i].hex} 
      R: ${colorData[i].r}
      G: ${colorData[i].g}
      B: ${colorData[i].b}
      Brightness: ${colorData[i].brightness}
      ` ;
    }
  }
}

function demonstrateColors() {
  // Display all colors with sample text styled in its actual color
  outputEl.innerHTML = "<h3>Demonstrate Colors</h3>";
  let displayText = `<br> Lorem Ipsum Dolor Sit Amet <br>`;

  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += colorData[i].name + displayText.fontcolor(colorData[i].hex);
  }
}

function changeBackgroundColor() {
  outputEl.innerHTML = "<h3>Background Color</h3>";
  let backgroundPrompt = prompt("What Color Would You Like The Background To Be? (name)");

  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name === backgroundPrompt) {
      document.body.style.background = `${colorData[i].hex}`;
      outputEl.innerHTML += `<br> Name: ${colorData[i].name} Hex: ${colorData[i].hex}`
    }
  }
}
