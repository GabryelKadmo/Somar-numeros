function soma() {
    const num1 = parseInt(document.getElementById("n1").value);
    const num2 = parseInt(document.getElementById("n2").value);
    const res = document.getElementById("res");

    if (isNaN(num1) || isNaN(num2)) return alert("Você fez algo errado!")

    return res.innerHTML = (`O resultado é ${num1 + num2}`)
}