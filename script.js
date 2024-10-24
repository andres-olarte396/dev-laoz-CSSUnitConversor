// Tamaño base para las conversiones (1 rem = 16 px)
const baseSize = 16;

function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    let result;

    if (isNaN(value) || value <= 0) {
        alert("Por favor, ingresa un valor válido.");
        return;
    }

    // Conversión a px como unidad base
    let valueInPx;
    switch (fromUnit) {
        case 'px':
            valueInPx = value;
            break;
        case 'rem':
        case 'em':
            valueInPx = value * baseSize;
            break;
        case '%':
            valueInPx = (value / 100) * baseSize;
            break;
    }

    // Conversión de px a la unidad seleccionada
    switch (toUnit) {
        case 'px':
            result = valueInPx;
            break;
        case 'rem':
        case 'em':
            result = valueInPx / baseSize;
            break;
        case '%':
            result = (valueInPx / baseSize) * 100;
            break;
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}