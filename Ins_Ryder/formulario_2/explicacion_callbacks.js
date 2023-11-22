funcion1()
function funcion1 () {
    alert ("1")
    funcion2(funcion3)
}

function funcion2 (funcion3) {
    funcion3()
    alert("3")
}

function funcion3 () {
    alert ("2")
}