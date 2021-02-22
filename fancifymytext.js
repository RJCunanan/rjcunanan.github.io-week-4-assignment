function makeTextLarger() {
    document.getElementById("textBox").style.fontSize="4em";
}

function styleText() {
    if (document.getElementById("fancyShmancy").checked = true) {
        document.getElementById("textBox").style.fontWeight = "bold";
        document.getElementById("textBox").style.color = "blue";
        document.getElementById("textBox").style.textDecoration = "underline";
    }
}

function unstyleText() {
    if (document.getElementById("boringBetty").checked = true) {
        document.getElementById("textBox").style.fontWeight = "normal";
        document.getElementById("textBox").style.color = "black";
        document.getElementById("textBox").style.textDecoration = "none";
    }
}

function mooFunction() {
    document.getElementById("textBox").style.textTransform = "uppercase";
    var stuff = document.getElementById("textBox").value;
    var parts = stuff.split(" ");
    var characters = parts[parts.length - 1].split("");
    if (characters[characters.length - 1] === ".") {
        characters[characters.length - 1] = "-Moo.";
    }
    parts[parts.length - 1] = characters.join("");
    stuff = parts.join(" ");
    document.getElementById("textBox").value = stuff;
}