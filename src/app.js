
let who = [`A pack of dolphins`, `Edward Cullen`, `A granny`, `A racoon`];
let action = [`made a horrible sound`, `looked in my direction`, `gave me the middle finger`, `robbed me`];
let what = [`while looking at me`, `with suspicious intentions`, `and that made me sad`, `with ninja-like moves`];
let when = [`as I was crossing Maracaibo's lake.`, `and gave me a panick attack.`, `as I was crossing the street.`, `and left me in complete shock!`]


function generarexcusa () {

    let ramnumforwho = Math.floor(Math.random() * 4);

    let ramnumforaction = Math.floor(Math.random() * 4);

    let ramnumforwhat = Math.floor(Math.random() * 4);

    let ramnumforwhen = Math.floor(Math.random() * 4);

    let numforwho = who [ramnumforwho];
    
    let numforaction = action [ramnumforaction];

    let numforwhat = what [ramnumforwhat];

    let numforwhen = when [ramnumforwhen];

    let excusa = numforwho + ` ` + numforaction + ` ` + numforwhat + ` ` + numforwhen;

    return excusa;
}

function cambiarExcusa() {
    document.getElementById("excusa").innerHTML = generarexcusa();
}

window.onload = function() {
    cambiarExcusa(); 
}