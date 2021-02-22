function makeTextLarger() {
    // Change the font size of the text within the textbox:
    document.getElementById("textBox").style.fontSize="4em";
}

function styleText() {
    // When the FancyShmancy radio button is selected:
    if (document.getElementById("fancyShmancy").checked = true) {
        // Make the text in the textbox bold, blue, and underlined:
        document.getElementById("textBox").style.fontWeight = "bold";
        document.getElementById("textBox").style.color = "blue";
        document.getElementById("textBox").style.textDecoration = "underline";
    }
}

function unstyleText() {
    // When the Boring Betty radio button is selected
    if (document.getElementById("boringBetty").checked = true) {
        // Make the text in the textbox normal, black, and not underlined:
        document.getElementById("textBox").style.fontWeight = "normal";
        document.getElementById("textBox").style.color = "black";
        document.getElementById("textBox").style.textDecoration = "none";
    }
}

function mooFunction() {
    // Uppercase all the letters in the textbox:
    document.getElementById("textBox").style.textTransform = "uppercase";

    // Get the text in the textbox and split it by its words:
    var stuff = document.getElementById("textBox").value;
    var parts = stuff.split(" ");

    // Take the last word in the sentence and split it into its letters:
    var characters = parts[parts.length - 1].split("");
    // Replace the period at the end of the sentence with "-Moo.":
    if (characters[characters.length - 1] === ".") {
        characters[characters.length - 1] = "-Moo.";
    }

    // Put all the letters and words back together into a sentence:
    parts[parts.length - 1] = characters.join("");
    stuff = parts.join(" ");

    // Place the new sentence into the textbox:
    document.getElementById("textBox").value = stuff;
}