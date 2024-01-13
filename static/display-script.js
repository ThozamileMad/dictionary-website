const defDiv = document.querySelector(".definitions");
const synDiv = document.querySelector(".synonyms");
const antDiv = document.querySelector(".antonyms");
const defBut = document.querySelector(".definition-but");
const synBut = document.querySelector(".synonym-but");
const antBut = document.querySelector(".antonym-but");
let cssPropertyValues = {
    "display": [
      ["flex", "none", "none"],
      ["none", "flex", "none"],
      ["none", "none", "flex"]
      ],
    "color": [
      ["white", "black", "black"],
      ["black", "white", "black"],
      ["black", "black", "white"]
      ],
    "background-color": [
      ["var(--color1)", "white", "white"],
      ["white", "var(--color1)", "white"],
      ["white", "white", "var(--color1)"]
      ],
    "border-color": [
      ["var(--color1)", "black", "black"],
      ["black", "var(--color1)", "black"],
      ["black", "black", "var(--color1)"]
      ]
};


function displayTab(display_array, color_array, background_color_array, border_color_array) {
  // Changes display property of button
  defDiv.style.display = display_array[0];
  synDiv.style.display = display_array[1];
  antDiv.style.display = display_array[2];

  // Change button properties
  defBut.setAttribute("style", "color: " + color_array[0] + "; background-color: " + background_color_array[0] + "; border: " + "3px solid " + border_color_array[0]);
  synBut.setAttribute("style", "color: " + color_array[1] + "; background-color: " + background_color_array[1] + "; border: " + "3px solid " + border_color_array[1]);
  antBut.setAttribute("style", "color: " + color_array[2] + "; background-color: " + background_color_array[2] + "; border: " + "3px solid " + border_color_array[2]);

};

function clickDefBut() {
  displayTab(
    cssPropertyValues["display"][0],
    cssPropertyValues["color"][0],
    cssPropertyValues["background-color"][0],
    cssPropertyValues["border-color"][0]
  );
}

function clickSynBut() {
  displayTab(
    cssPropertyValues["display"][1],
    cssPropertyValues["color"][1],
    cssPropertyValues["background-color"][1],
    cssPropertyValues["border-color"][1]
  );
}

function clickAntBut() {
  displayTab(
    cssPropertyValues["display"][2],
    cssPropertyValues["color"][2],
    cssPropertyValues["background-color"][2],
    cssPropertyValues["border-color"][2]
  );
}

defBut.onclick = clickDefBut;
synBut.onclick = clickSynBut;
antBut.onclick = clickAntBut;


