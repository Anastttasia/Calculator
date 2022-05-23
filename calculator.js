function sum () {
    let a, b;
    let result;

    a = document.getElementById("a").value;
    a = parseInt(a);

    b = document.getElementById("b").value;
    b = parseInt(b);

    result = a + b;
    document.getElementById("out").innerHTML = result;
}

function min () {
    let a, b;
    let result;

    a = document.getElementById("a").value;
    a = parseInt(a);

    b = document.getElementById("b").value;
    b = parseInt(b);

    result = a - b;
    document.getElementById("out").innerHTML = result;
}

function proiz () {
    let a, b;
    let result;

    a = document.getElementById("a").value;
    a = parseInt(a);

    b = document.getElementById("b").value;
    b = parseInt(b);

    result = a * b;
    document.getElementById("out").innerHTML = result;
}

function del () {
    let a, b;
    let result;

    a = document.getElementById("a").value;
    a = parseInt(a);

    b = document.getElementById("b").value;
    b = parseInt(b);

    result = a / b;
    document.getElementById("out").innerHTML = result;
}
