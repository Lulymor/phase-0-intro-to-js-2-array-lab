// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function desctructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() { 
    cats.shift();
}
