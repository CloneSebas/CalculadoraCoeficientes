function calculate() {
    const tco = parseFloat(document.getElementById('tco').value);
    const tcc = parseFloat(document.getElementById('tcc').value);
    const promedio = parseFloat(document.getElementById('promedio').value);

    if (isNaN(tco) || isNaN(tcc) || isNaN(promedio)) {
        alert("Por favor, ingresa todos los valores.");
        return;
    }

    const result = (tco / tcc) * 90 + promedio;
    document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)}`;
}
