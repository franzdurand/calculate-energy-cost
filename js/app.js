function calculate() {
    let number1 = document.getElementById('last_count').value;
    let number2 = document.getElementById('current_count').value;

    let n1 = +number1;
    let n2 = +number2;

    if ((Number.isInteger(n1) || isFloat(n1)) && (isFloat(n2) || Number.isInteger(n2))) {
        if ((n1 > 0 && n2 > 0) && n2 > n1) {
            const unit_price = 0.5006;
            const fixed_fee = 2.61;
            const meintainance = 1.32;
            const public_light = 3.47;   
            const rural_electricy = 0.97;
            let consume = number2 - number1
            let sub_total = consume * unit_price + fixed_fee + public_light + meintainance ;
            let igv = sub_total * 0.18
            let consume_total = (sub_total + igv + rural_electricy).toFixed(2);
            alert("S/ " + consume_total); 
        } else {
            alert("last count should be lower than current count")
        }
    } else {
        alert("Please insert only numbers")
    }
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}