//Kliens oldali szkript az adatok küldésére és fogadására

async function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Kérem adjon meg egy számot!";
        return;
    }

    //adatok küldése a klienstől az API-nak.
    const response = await fetch('http://localhost:3000/api/calculate', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({num1, num2, operator})
    });

    //Az eredmény fogadása az Api-tól.
    const result = await response.json();
    document.getElementById('result').textContent = result.result;
}