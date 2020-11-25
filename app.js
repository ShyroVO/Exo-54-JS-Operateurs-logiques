let x = 1;
let y = 4;
let z = -1;
let result = document.getElementById("results");

if (x < 2){
    console.log("X est plus petit que 2");
}
else {
    console.log("X n'est pas plus petit que 2");
}

if (y > 3) {
    console.log("Y est plus grand que 3");
}
else {
    console.log("Y n'est pas plus grand que 3");
}

if (z <= 0) {
    console.log("Z est inférieur ou égal à 0");
}
else {
    console.log("Z n'est pas inférieur ou égal à 0");
}

if (x < 2 && y > 3 && z <=0) {
    console.log("X est plus petit que 2, Y est plus grand que 3 et Z est inférieur ou égal à 0");
}

if( (x < 2 && y > 3) || z <= 0) {
    result.innerHTML = "X est plus petit que 2 et Y est plus grand que 3 ou Z est inférieur ou égal à 0";
}