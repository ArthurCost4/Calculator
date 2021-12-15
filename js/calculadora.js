let n1 = ""
let n2 = ""
let metodo = ""
let resulta = ""

function calcular(ev) {

    n1 = parseFloat(document.getElementById("num1").value);
    n2 = parseFloat(document.getElementById("num2").value);
    metodo = document.getElementById("forma").value;
    resulta = document.getElementById("resulta");

    if(metodo == "+"){
        resulta = n1 + n2
        window.alert(`${resulta}`)
    }
    else if (metodo == "-"){
        resulta = n1 - n2
        window.alert(`${resulta}`)
    }
    else if (metodo == "*"){
        resulta = n1 * n2
        window.alert(`${resulta}`)
    }
    else if (metodo == "/"){
        resulta = n1 / n2
        window.alert(`${resulta}`)
    }
}