var byn = document.getElementById('byn');
var usd = document.getElementById('usd');

byn.oninput = function () {
    if (isNaN(byn.value)) {
        byn.value = "";
        alert('Введите число');
    }
    fetch('https://www.nbrb.by/API/ExRates/Rates/145')
        .then(function (res) {
            usd.value = 'Связь с сервером...';
            return res.json();
        })
        .then(function (res) {
            usd.value = byn.value / res.Cur_OfficialRate
        })

};

usd.oninput = function () {
    if (isNaN(usd.value)) {
        byn.value = "";
        alert('Введите число');
    }
    fetch('https://www.nbrb.by/API/ExRates/Rates/145')
        .then(function (res) {
            byn.value = 'Связь с сервером...';
            return res.json();
        })
        .then(function (res) {
            byn.value = usd.value * res.Cur_OfficialRate;
        })

};
