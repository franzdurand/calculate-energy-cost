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

// --------------------------------------

const dates = [
    {month: "03/10/2022", consume: "9339" + " kW"},
    {month: "02/10/2022", consume: "9222.20" + " kW"},
    {month: "01/10/2022", consume: "9005.40" + " kW"},
    {month: "12/10/2021", consume: "8918.60" + " kW"},
    {month: "11/10/2021", consume: "8801.80" + " kW"},
    {month: "10/10/2021", consume: "8725.00" + " kW"},
];

let tbody = document.getElementById("items");
for (item of dates) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    td.className = "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
    td2.className = "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
    td.innerHTML = item.month
    td2.innerHTML = item.consume
    tr.appendChild(td)
    tr.appendChild(td2)
    tbody.appendChild(tr)
}