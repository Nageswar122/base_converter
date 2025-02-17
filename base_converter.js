function convert() {
    const number = document.getElementById('number').value;
    const fromBase = document.getElementById('fromBase').value;
    const toBase = document.getElementById('toBase').value;

    // Check if the source base is selected
    if (fromBase === "default") {
        alert('Please select a valid source base.');
        return;
    }

    // Check if the destination base is selected
    if (toBase === "default") {
        alert('Please select a valid destination base.');
        return;
    }

    const fromBaseInt = parseInt(fromBase, 10);
    const toBaseInt = parseInt(toBase, 10);

    if (!number || isNaN(fromBaseInt) || isNaN(toBaseInt)) {
        alert('Please fill all fields with valid values.');
        return;
    }

    // Convert the number from the source base to base 10
    const base10Number = parseInt(number, fromBaseInt);

    if (isNaN(base10Number)) {
        alert('Invalid number for the given base.');
        return;
    }

    // Convert the number from base 10 to the target base
    const result = base10Number.toString(toBaseInt);

    document.getElementById('inputDisplay').innerHTML = `<strong>Input is:</strong> ${number} (in base ${fromBaseInt})`;
    document.getElementById('resultDisplay').innerHTML = `<strong>Result is:</strong> ${result} (in base ${toBaseInt})`;
}

function swapBase() {
    const fromBase = document.getElementById('fromBase');
    const toBase = document.getElementById('toBase');
    const temp = fromBase.value;
    fromBase.value = toBase.value;
    toBase.value = temp;
}

function clearFields() {
    document.getElementById('number').value = '';
    document.getElementById('fromBase').value = "default";
    document.getElementById('toBase').value = "default";
    document.getElementById('inputDisplay').innerHTML = ' ';
    document.getElementById('resultDisplay').innerHTML = ' ';
}
