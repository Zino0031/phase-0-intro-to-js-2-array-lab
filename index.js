
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
  }

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function  appendCat(name) {

    const newcat = cats.concat (name);

    return newcat;

}

function prependCat(name){
    const neewcat = [name, ...cats];
    return neewcat;
}

function  removeLastCat(){
    const newcat = cats.slice(0,cats.length -1);
    return newcat;

}

function removeFirstCat(){
    const newcat = cats.slice(1);
    return newcat;
}